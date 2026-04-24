import zod from "zod";

export const QueryOptionsSchema = zod.object({
    q: zod.optional(zod.string()),
    gender: zod.optional(zod.string()),
    age_group: zod.optional(zod.string()),
    country_id: zod.optional(zod.string()),
    min_age: zod.optional(zod.coerce.number().min(1)),
    max_age: zod.optional(zod.coerce.number().min(1)),
    min_gender_probability: zod.optional(zod.coerce.number().min(0)),
    min_country_probability: zod.optional(zod.coerce.number().min(0)),
    sort_by: zod.optional(zod.preprocess(
        (val) => (typeof val === "string" ? val.toLowerCase() : val),
        zod.literal(["age", "created_at", "gender_probability"])
    )),
    order: zod.optional(zod.preprocess(
        (val) => (typeof val === "string" ? val.toLowerCase() : val),
        zod.literal(["asc", "desc"])
    )),
    page: zod.optional(zod.coerce.number().min(1)),
    limit: zod.optional(zod.coerce.number().min(1).max(50))
})