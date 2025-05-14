import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from './models/user_role.model';
import { Repository } from 'typeorm';
import { UserRoleCreateInput, UserRoleCreateOutput } from './dto/userRoles-create.dto';
import { UserRoleUpdateInput, UserRoleUpdateOutput } from './dto/userRoles-update.dto';
import { User } from 'src/users/models/users.model';
import { Role } from 'src/roles/models/role.model';



@Injectable()
export class UserRolesService {
    constructor(
        @InjectRepository(UserRole)
        private readonly userRoleRepository: Repository<UserRole>,

        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) {}


    async UserRoleCreate(input: UserRoleCreateInput): Promise<UserRoleCreateOutput> {
        const role = await this.roleRepository.findOne({ where: { id: input.roleId.toString() } });
        const user = await this.userRepository.findOne({ where: { id: input.userId.toString() } });

        if (!role || !user) {
            throw new Error('Role or Permission not found');
        }

        const newUserRole = this.userRoleRepository.create({
            user: User,
            role: Role,
            assignedAt: input.assignedAt,

        });
       const userRole = await this.userRoleRepository.save(newUserRole);
       return {userRole};
    }

    async userRoleUpdate(userRoleId: UserRole['id'],
        input: UserRoleUpdateInput
    ): Promise<UserRoleUpdateOutput> {
        const userRole = await this.userRoleRepository.findOneOrFail({where: {id: userRoleId}});
        userRole.user,
        userRole.role,
       
        await userRole.save();
        return {userRole};
    }
}