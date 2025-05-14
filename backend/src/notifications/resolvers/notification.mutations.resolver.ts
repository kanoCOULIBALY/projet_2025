import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { NotificationsService } from "../notifications.service";
import { NotificationsCreateInput, NotificationsCreateOutput } from "../dto/notifications-create.dto";
import { Notification } from "../models/notifications.model";


@Resolver(Notification)
export class NotificationsMutationResolver {
    constructor(
        private readonly notificationsService: NotificationsService,
    ) {}

    @Mutation(() => NotificationsCreateOutput)
    async notificationCreate(
        @Args('input') input: NotificationsCreateInput,
    ){
        return this.notificationsService.notificationCreate(input);
    }
}