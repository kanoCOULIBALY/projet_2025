import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/models/users.model';
import { Repository } from 'typeorm';
import { NotificationsCreateInput, NotificationsCreateOutput } from './dto/notifications-create.dto';
import { Notification } from './models/notifications.model';

@Injectable()
export class NotificationsService {
    constructor(
        @InjectRepository(Notification)
        private readonly notificationsRepository: Repository<Notification>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,  
    ){}

    async notificationCreate(input: NotificationsCreateInput): Promise<NotificationsCreateOutput> {
        const user = await this.userRepository.findOne({ where: { id: input.userId.toString() } });
        
        if (!user) {
            throw new Error('User not found');
        }

        const newNotification = this.notificationsRepository.create({
            type: input.type,
            content: input.content,
            status: input.status,
            user,  
        });

        const notifications = await this.notificationsRepository.save(newNotification);
        return { notifications };
    }

}
