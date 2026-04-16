export interface GenderizeRes {
    "count": number,
    "name": string,
    "gender": string | null,
    "probability": number
}

export interface FormattedRes {
    "status": string,
    "data": {
    "name": string,
    "gender": string,
    "probability": number,
    "sample_size": number,
    "is_confident": boolean,
    "processed_at": string
 }
}

export interface AgifyRes {
    "count" : number,
    "name": string,
    "age": number
}

/* The epected fields do not need to be in quotes as long as it's a valid identifier as seen in TS Doc */
type Country = {
    country_id : string,
    probability: number
}

export interface NationalizeRes {
    count: number,
    name: string,
    country: Country[]
}