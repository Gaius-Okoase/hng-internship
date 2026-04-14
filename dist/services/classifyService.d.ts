export declare const classifyService: (name: string) => Promise<{
    status: string;
    data: {
        name: string;
        gender: string;
        probability: number;
        sample_size: number;
        is_confident: boolean;
        processed_at: string;
    };
}>;
//# sourceMappingURL=classifyService.d.ts.map