import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Notification } from "../models/notifications.model";


@InputType()
export class NotificationsCreateInput {
    @Field(() => String)
    type: string;

    @Field(() => String)
    content: string;

    @Field(() => String)
    status: string;

    @Field(() => String) 
    userId: string;

}

@ObjectType()
export class NotificationsCreateOutput {
    @Field(() => Notification)
    notifications: Notification;
}