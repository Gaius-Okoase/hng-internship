//import mongoose from 'mongoose';
import axios from 'axios';
import { generateState } from '../utils/PKCEcode.js';
import { AppError } from '../utils/AppError.js';


// Create a store Map to keep state and code_challenge value
const store = new Map<string, {code_challenge?: string | undefined}>();

export const getGitHubAuthUrlService = (code_challenge?: string) => {
    const redirectUri = process.env.REDIRECT_URI;
    const cliRedirectUri = process.env.CLI_REDIRECT_URI;
    const clientId = process.env.CLIENT_ID;
    // Declare needed variable for this service.
    const scope = `read:user`;
    // Create random state key and store in map
    const state = generateState()
    store.set(state, { code_challenge });
    // get GitHub Auth Uri based on interface
    const gitHubWebPortalUri = `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}&scope=${scope}`;
    const gitHubCliUri = `https://github.com/login/oauth/authorize?client_id=${clientId}&state=${state}&redirect_uri=${cliRedirectUri}&scope=${scope}&code_challenge=${code_challenge}&code_challenge_method=S256`
    const gitHubUri = code_challenge !== undefined ? gitHubCliUri : gitHubWebPortalUri;

    return {gitHubUri};
}

export const getProfileFromGitHubService = async (code: string, state: string, code_verifier?: string) => {
    // Check if state is same as when initiated to prevent CSRF
    const entry = store.get(state);
    console.log(entry)
    if (entry == undefined) throw new AppError(401, "Unauthorized");
    store.delete(state);    

    // Declare variables needed for this service
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;
    const cliRedirectUri = process.env.CLI_REDIRECT_URI;
    const clientId = process.env.CLIENT_ID;

    // Get access token from GitHub
    const tokenResponse = entry.code_challenge
        ? await axios.post<{
            access_token: string;
            scope: string;
            token_type: string;
        }>('https://github.com/login/oauth/access_token', {
            client_id: clientId,
            code_verifier,
            code,
            cliRedirectUri
        }, {
            headers: {
                Accept: 'application/json'
            }
        })
        : await axios.post<{
            access_token: string;
            scope: string;
            token_type: string;
        }>('https://github.com/login/oauth/access_token', {
            client_id: clientId,
            client_secret: clientSecret,
            code,
            redirectUri
        }, {
            headers: {
                Accept: 'application/json'
            }
        });

    const accessToken = tokenResponse.data.access_token;

    // Get user GitHub profile with access token from GitHub
    const userGitHubProfile = await axios.get('https://api.github.com/user', {
        headers: {Authorization: `Bearer ${accessToken}`}
    });
    const user = userGitHubProfile.data;

    return user;
}