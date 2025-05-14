import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./models/users.model";
import { UserCreateInput, UserCreateOutput } from "./dto/users-create.dto";
import { Repository } from "typeorm";



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
   
  async userCreate(input: UserCreateInput): Promise<UserCreateOutput> {
    const user = this.userRepository.create(input);
    await user.save();
    return { user };
}

  async userGet(email: User['email']): Promise<User> {
  return this.userRepository.findOneOrFail({ where: { email } });
  }

  async userGetById(id: User['id']): Promise<User> {
    return this.userRepository.findOneOrFail({ where: { id } });
  }
}
