
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWTPayload } from '../auth.service';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    const secret = configService.get('JWT_SECRET');
    

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  async validate(payload: JWTPayload): Promise<JWTPayload> {
    return { 
        id: payload.id, 
        email: payload.email, 
        first_name: payload.first_name, 
        last_name: payload.last_name 
    };
  }
}
