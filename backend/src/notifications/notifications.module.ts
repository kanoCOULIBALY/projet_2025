import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/models/users.model';
import { NotificationsMutationResolver } from './resolvers/notification.mutations.resolver';
import { Notification } from './models/notifications.model';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, User])],
  providers: [NotificationsService, NotificationsMutationResolver],
})
export class NotificationsModule {}
