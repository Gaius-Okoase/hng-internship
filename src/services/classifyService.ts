import axios from 'axios';
import type { GenderizeRes } from "../types.js"
import { AppError } from '../utils/AppError.js';


const callGenderizeApi = async (name: string) => { 
    const result = await axios.get(`https://api.genderize.io?name=${name}`)
    const gendrizeRes: GenderizeRes = result.data;
    return gendrizeRes;
}

export const classifyService = async (name: string) => {
    //  Fetch from Genderize API
    const genderizeRes : GenderizeRes = await callGenderizeApi(name);

    // Check if gender is null or count is 0
    if (genderizeRes.gender === null || genderizeRes.count === 0 ) {
        throw new AppError (502, "No prediction available for the provided name")
    }

    // Rename count to sample_size
    const sample_size: number = genderizeRes.count;
    
    // compute is_confident
    const is_confident = genderizeRes.probability >= 0.7 && genderizeRes.count >= 100;

    // Generate processed_at
    const processed_at = new Date().toISOString()

    return {
        status: "success",
        data: {
            name: name,
            gender: genderizeRes.gender,
            probability: genderizeRes.probability,
            sample_size: sample_size,
            is_confident: is_confident,
            processed_at: processed_at
        }
    }
}
