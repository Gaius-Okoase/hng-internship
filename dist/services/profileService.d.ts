export declare const createProfileService: (name: string) => Promise<{
    status: string;
    message: string;
    data: import("mongoose").Document<unknown, {}, import("../types.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../types.js").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
} | {
    status: string;
    data: import("mongoose").Document<unknown, {}, import("../types.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../types.js").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    };
    message?: never;
}>;
//# sourceMappingURL=profileService.d.ts.map