import { InputType, ObjectType } from "@nestjs/graphql";
import { UserSessionCreateInput, UserSessionCreateOutput } from "./userSessions-create.dto";


@InputType()
export class UserSessionsUpdateInput extends UserSessionCreateInput{

}

@ObjectType()
export class UserSessionsUpdateOutput extends UserSessionCreateOutput{
    
}