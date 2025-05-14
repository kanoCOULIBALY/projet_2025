import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { MessageModule } from './messages/message.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { UserRolesModule } from './user_roles/user_roles.module';
import { RolePermissionsModule } from './role_permissions/role_permissions.module';
import { UserSessionsModule } from './user_sessions/user_sessions.module';
import { AuditLogsModule } from './audit_logs/auditLogs.module';
import { MfaKeysModule } from './mfa_keys/mfa_keys.module';
import { SecurityPoliciesModule } from './security_policies/security_policies.module';
import { PasswordResetHistoryModule } from './password_reset_history/password_reset_history.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ApiKeysModule } from './api_keys/apiKeys.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: parseInt(configService.get('DATABASE_PORT')?? '5432'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [join(__dirname, '**', '*.model.{ts,js}')],
        synchronize: true,
        logging: true,

      })
    }),
    MessageModule,
    AuthModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    UserRolesModule,
    RolePermissionsModule,
    UserSessionsModule,
    AuditLogsModule,
    MfaKeysModule,
    SecurityPoliciesModule,
    PasswordResetHistoryModule,
    NotificationsModule,
    ApiKeysModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
