import axios from 'axios';
import type { GenderizeRes, AgifyRes, NationalizeRes } from "../types.js";
import { v7 as uuidv7 } from "uuid";
import { AppError } from '../utils/AppError.js';
import { User } from '../models/User.js';

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

export const createProfileService = async (name: string) => {

    // Ensure name is always lowecase
    const smallName = name.toLowerCase();

    // Check if name already exists
    const nameExists = await User.findOne({name: smallName}).select("-_id -__v");
    if (nameExists) {
        return {
            status: "success",
            message: "Profile already exists",
            data: nameExists
        }
    }

    //  Fetch from Genderize API
    const genderizeRes = await callGenderizeApi(smallName);
    const agifyRes = await callAgifyApi(smallName);
    const nationalizeRes = await callNationalizeApi(smallName);

    /* Process Genderize API Result */
    // Check if gender is null or count is 0
    if (genderizeRes.gender === null || genderizeRes.count === 0 ) {
        throw new AppError (502, "Genderize returned an invalid response")
    }

    //Extract gender, gender_probability, and count from Genderize. Rename count to sample_size
    const gender = genderizeRes.gender;
    const gender_probability = genderizeRes.probability
    const sample_size: number = genderizeRes.count;

    /* Process Agify API result and classify */
    // Check if age is null
    if (agifyRes.age == null) {
        throw new AppError(502, "Agify returned an invalid response")
    }

    // Extract age from Agify. Classify age_group: 0–12 → child, 13–19 → teenager, 20–59 → adult, 60+ → senior
    const age = agifyRes.age;

    let age_group: "child" | "teenager" | "adult" | "senior";
    if (age >= 0 && age <= 12) {
        age_group = "child";
    } else if (age >= 13 && age <= 19) {
        age_group = "teenager";;
    } else if (age >= 20 && age <= 59) {
        age_group = "adult";
    } else {
        age_group = "senior"
    }

    /* Process Nationalize API*/
    // Check if there's no country data
    if (nationalizeRes.country == null || nationalizeRes.country.length === 0) {
        throw new AppError(502, "Nationalize returned an invalid response")
    }

    // Extract country list from Nationalize
    const country = nationalizeRes.country;

    //Pick the country with the highest probability as country_id
    let country_probability = country[0]!.probability;
    let country_id = country[0]!.country_id;

    for ( let nation of country ) {

        if (nation.probability > country_probability) {
            country_probability = nation.probability
            country_id = nation.country_id;   
        }
    }

    // Store the processed result with a UUID v7 id and UTC created_at timestamp
    const id = uuidv7();
    const created_at = new Date().toISOString();

    const profile = await User.create({
        id,
        name: smallName,
        gender,
        gender_probability,
        sample_size,
        age,
        age_group,
        country_id,
        country_probability,
        created_at
    })

    await profile.save()

    return {
        status: "success",
        data: profile
    }
}

export const getProfileService = async (id : string) => {

    const profile = await User.findOne({id}).select("-_id -__v");

    if (!profile) {
        throw new AppError (404, `Profile not found`)
    }

    return {
        status: "success",
        data: profile
    }

}

export const getAllProfileService = async (gender?: string, age_group?: string, country_id?: string) => {
    // Initialize queries object for optional query parameters
    const queries: {
        gender?: string,
        country_id?: string,
        age_group?: string
    } = {}

    // Pass query arguments to the queries objects if available
    if (gender) queries.gender = gender.toLocaleLowerCase();
    if (country_id) queries.country_id = country_id.toUpperCase();
    if (age_group) queries.age_group = age_group.toLowerCase();

    // Find documents by queries
    const profiles = await User.find(queries).select("id name gender age age_group country_id -_id");
    const count = profiles.length;
    
    return {
        status: "success",
        count,
        data: profiles
    }
}

export const deleteProfileService = async (id: string) => {

    const deletedProfile = await User.deleteOne({id});

    if (deletedProfile.deletedCount === 0 ) throw new AppError(404, "Profile not found");

    return
}