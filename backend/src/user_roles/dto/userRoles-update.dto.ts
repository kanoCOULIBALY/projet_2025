import { InputType, ObjectType } from "@nestjs/graphql";
import { UserRoleCreateInput, UserRoleCreateOutput } from "./userRoles-create.dto";



@InputType()
export class UserRoleUpdateInput extends UserRoleCreateInput{

}

@ObjectType()
export class UserRoleUpdateOutput extends UserRoleCreateOutput{
    
}