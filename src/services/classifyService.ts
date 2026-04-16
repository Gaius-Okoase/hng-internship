import axios from 'axios';
import type { GenderizeRes, AgifyRes, NationalizeRes } from "../types.js"
import { AppError } from '../utils/AppError.js';

// Funtions to call external APIs
const callGenderizeApi = async (name: string) => { 
    const result = await axios.get(`https://api.genderize.io?name=${name}`)
    const gendrizeRes: GenderizeRes = result.data;
    return gendrizeRes;
}

const callAgifyApi = async (name: string) => {
    const result = await axios.get(`https://api.agify.io?name=${name}`);
    const agifyRes: AgifyRes = result.data;
    return agifyRes;
}

const callNationalizeApi = async (name: string) => {
    const result = await axios.get(`https://api.nationalize.io?name=${name}`);
    const nationalizeRes: NationalizeRes = result.data;
    return nationalizeRes;
}

export const classifyService = async (name: string) => {
    //  Fetch from Genderize API
    const genderizeRes = await callGenderizeApi(name);
    const agifyRes = await callAgifyApi(name);
    const nationalizeRes = await callNationalizeApi(name);

    /* Process Genderize API Result */
    // Check if gender is null or count is 0
    if (genderizeRes.gender === null || genderizeRes.count === 0 ) {
        throw new AppError (502, "No prediction available for the provided name")
    }

    // Rename count to sample_size
    const sample_size: number = genderizeRes.count;



    return {
        status: "success",
        data: {
            name: name,
            gender: genderizeRes.gender,
            probability: genderizeRes.probability,
            sample_size: sample_size,
        }
    }
}
