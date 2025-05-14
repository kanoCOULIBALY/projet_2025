
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthMutationsResolver } from './resolvers/auth.mutations.resolver';
import { LocalStrategy } from './strategies/auth.local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports: [UsersModule, 
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (ConfigService)=> ({
      secret: ConfigService.get('JWT_SECRET'),
      signOptions: { expiresIn: '60s' },
    })
  })
    ],
  providers: [AuthService,AuthMutationsResolver, LocalStrategy, JwtStrategy],
})
export class AuthModule {}