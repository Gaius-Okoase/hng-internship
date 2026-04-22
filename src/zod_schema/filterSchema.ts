import zod from "zod";

export const FilterOptionsSchema = zod.object({
    gender: zod.optional(zod.string()),
    age_group: zod.optional(zod.string()),
    country_id: zod.optional(zod.string()),
    min_age: zod.optional(zod.coerce.number().min(1)),
    max_age: zod.optional(zod.coerce.number().min(1)),
    min_gender_probability: zod.optional(zod.coerce.number().min(0)),
    min_country_probability: zod.optional(zod.coerce.number().min(0))
})

/*
export interface ProfileFilters {
     gender?: string | undefined,
     age_group?: string | undefined,
     country_id?: string | undefined,
     min_age?: string | undefined,
     max_age?: string | undefined,
     min_gender_probability?: string | undefined,
     min_country_probability?: string | undefined
 }
 */