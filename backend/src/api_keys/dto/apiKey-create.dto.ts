import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { ApiKey } from "../models/apiKey.model";

// le dto permet de declarer les types

@InputType()
export class ApiKeyCreateInput {
    @Field(() => String)
    apiKey: string;

    @Field(() => String)
    status: string;

    @Field(() => Date)
    expiresAt: Date;
}

@ObjectType()
export class ApiKeyCreateOutput {
    @Field(()=> ApiKey)
    apiKey: ApiKey;
}