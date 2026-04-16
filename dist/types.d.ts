export interface GenderizeRes {
    "count": number;
    "name": string;
    "gender": string | null;
    "probability": number;
}
export interface CreatedProfile {
    status: string;
    data: {
        id: string;
        name: string;
        gender: string;
        gender_probability: number;
        sample_size: number;
        age: number;
        age_group: "child" | "teenager" | "adult" | "senior";
        country_id: string;
        country_probability: number;
        created_at: string;
    };
}
export interface AgifyRes {
    "count": number;
    "name": string;
    "age": number;
}
type Country = {
    country_id: string;
    probability: number;
};
export interface NationalizeRes {
    count: number;
    name: string;
    country: Country[];
}
export interface IUser {
    id: string;
    name: string;
    gender: string;
    gender_probability: number;
    sample_size: number;
    age: number;
    age_group: "child" | "teenager" | "adult" | "senior";
    country_id: string;
    country_probability: number;
    created_at: string;
}
export {};
//# sourceMappingURL=types.d.ts.map