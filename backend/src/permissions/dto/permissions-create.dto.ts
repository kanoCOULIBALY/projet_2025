import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Permission } from "../models/permission.model";


@InputType()
export class PermissionCreateInput {
    
    @Field(() => String)
    permissionName: string;

    @Field(() => String)
    description: string;

}

@ObjectType()
export class PermissionCreateOutput {
    @Field(() => Permission)
    permission: Permission;

}

   