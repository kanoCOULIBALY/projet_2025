import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { MfaKey } from "../models/mfa_key.model";



@InputType()
export class MfaKeyCreateInput {
    

    @Field(() => String)
    mfaType: string;

    @Field(() => String)
    mfaKey: string;

    @Field(() => String)
    status: string;

    @Field(() => String)
    userId: string;

}

@ObjectType()
export class MfaKeyCreateOutput {
    @Field(() => MfaKey)
    mfaKey: MfaKey;
}