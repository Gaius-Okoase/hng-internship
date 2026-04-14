export interface GenderizeRes {
    "count": number;
    "name": string;
    "gender": string | null;
    "probability": number;
}
export interface FormattedRes {
    "status": string;
    "data": {
        "name": string;
        "gender": string;
        "probability": number;
        "sample_size": number;
        "is_confident": boolean;
        "processed_at": string;
    };
}
//# sourceMappingURL=types.d.ts.map