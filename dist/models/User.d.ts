import mongoose from "mongoose";
import type { IUser } from "../types.js";
export declare const userSchema: mongoose.Schema<IUser, mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any, IUser>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, {
    id?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    name?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    gender?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    gender_probability?: mongoose.SchemaDefinitionProperty<number, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    sample_size?: mongoose.SchemaDefinitionProperty<number, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    age?: mongoose.SchemaDefinitionProperty<number, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    age_group?: mongoose.SchemaDefinitionProperty<"child" | "teenager" | "adult" | "senior", IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    country_id?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    country_probability?: mongoose.SchemaDefinitionProperty<number, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    created_at?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
}, IUser>;
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<IUser, mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any, IUser>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, {
    id?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    name?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    gender?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    gender_probability?: mongoose.SchemaDefinitionProperty<number, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    sample_size?: mongoose.SchemaDefinitionProperty<number, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    age?: mongoose.SchemaDefinitionProperty<number, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    age_group?: mongoose.SchemaDefinitionProperty<"child" | "teenager" | "adult" | "senior", IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    country_id?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    country_probability?: mongoose.SchemaDefinitionProperty<number, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    created_at?: mongoose.SchemaDefinitionProperty<string, IUser, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
}, IUser>, IUser>;
//# sourceMappingURL=User.d.ts.map