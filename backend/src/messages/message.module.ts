import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './models/message.model';
import { MessageMutationsResolver } from './resolvers/message.mutations.resolver';
import { MessageQueriesResolver } from './resolvers/message.queries.resolver';
import { MessageFieldsResolver } from './resolvers/message.fields.resolver';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), UsersModule],
  providers: [MessageService, MessageMutationsResolver, MessageQueriesResolver, MessageFieldsResolver],
})
export class MessageModule {}
