import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/models/users.model";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcrypt";
export interface JWTPayload {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private jwtService: JwtService,
        
    ) {}

    async validateUser( email: string, password: string,): Promise<any> {
        const salt = await bcrypt.genSalt(10);
        const user = await this.userService.userGet(email);
        if (user && await bcrypt.compare(password, salt)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload: JWTPayload = {
            id: user.id,
            email: user.email,
            first_name: user.firstName,
            last_name: user.lastName,};
        return {
            accessToken: this.jwtService.sign(payload),
        }
    }
}


// note : ajouter bcrypt pour le hashage du mot de passe
