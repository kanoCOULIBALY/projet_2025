import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { UserRole } from "../models/user_role.model";


@InputType()
export class UserRoleCreateInput {
    @Field(() => String)
    userId: string;

    @Field(() => String)
    roleId: string;

    @Field(() => Date)
    assignedAt: Date;
}

@ObjectType()
export class UserRoleCreateOutput {
    @Field(()=> UserRole)
    userRole: UserRole;
}