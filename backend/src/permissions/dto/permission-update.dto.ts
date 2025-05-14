import { InputType, ObjectType } from "@nestjs/graphql";
import { PermissionCreateInput, PermissionCreateOutput } from "./permissions-create.dto";



@InputType()
export class PermissionUpdateInput extends PermissionCreateInput{

}

@ObjectType()
export class PermissionUpdateOutput extends PermissionCreateOutput{
    
}