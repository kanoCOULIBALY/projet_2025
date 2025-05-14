import { Injectable } from '@nestjs/common';
import { MessageCreateInput, MessageCreateOutput } from './dto/message-create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './models/message.model';
import { Repository } from 'typeorm';
import { MessageUpdateInput, MessageUpdateOutput } from './dto/message-update.dto';
import { MessageDeleteOutput } from './dto/message-delete.dto';
import { MessagePagination, MessagePaginationArgs } from './dto/message-pagination.dto';
import { SortDirection } from 'src/pagination/dto/pagination.dto';
import { JWTPayload } from 'src/auth/auth.service';
import { User } from 'src/users/models/users.model';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) {}

    async messageCreate(user: JWTPayload, input: MessageCreateInput): Promise<MessageCreateOutput>{
        const message = this.messageRepository.create(input);
        message.author = new User();
        message.author.id = user.id;

        await message.save();
        return {message};
    }

    async messageUpdate(
        messageId: Message['id'],
        input: MessageUpdateInput
    ): Promise<MessageUpdateOutput> {
        const message = await this.messageRepository.findOneOrFail({where: {id: messageId}});
        message.title = input.title;
        message.description = input.description;
        message.image = input.image;
        await message.save();
        return {message};
    }


    async messageDelete(
        messageId: Message['id']): Promise<MessageDeleteOutput> {
        const message = await this.messageRepository.findOneOrFail({where: {id: messageId}});
        await message.remove();
        return {messageId};
    }

    async messagePagination(
        args: MessagePaginationArgs,
    ): Promise<MessagePagination> {
        const qb = this.messageRepository.createQueryBuilder('message');
        qb.take(args.take);
        qb.skip(args.skip);
        if (args.sortBy) {
           
            if (args.sortBy.createdAt !== undefined) {
                qb.addOrderBy(
                    'message.createdAt',
                    args.sortBy.createdAt === SortDirection.ASC ? 'ASC' : 'DESC'
                );
            }

            if (args.sortBy.title !== undefined) {
                qb.addOrderBy(
                    'message.title',
                    args.sortBy.title === SortDirection.ASC ? 'ASC' : 'DESC'
                );
            }
        }
        const [nodes, totalCount] = await qb.getManyAndCount();
        return {nodes, totalCount};
    }
}
