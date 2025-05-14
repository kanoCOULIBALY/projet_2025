import { InputType, ObjectType } from "@nestjs/graphql";
import { ApiKeyCreateInput, ApiKeyCreateOutput } from "./apiKey-create.dto";




@InputType()
export class ApiKeyUpdateInput extends ApiKeyCreateInput{

}

@ObjectType()
export class ApiKeyUpdateOutput extends ApiKeyCreateOutput{
    
}