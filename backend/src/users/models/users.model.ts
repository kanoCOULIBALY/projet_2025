import { Field, ObjectType } from "@nestjs/graphql";
import { AuditLog } from "src/audit_logs/models/audit_log.model";
import { Auth } from "src/auth/models/auth.model";
import { Message } from "src/messages/models/message.model";
import { MfaKey } from "src/mfa_keys/models/mfa_key.model";
import { Notification } from "src/notifications/models/notifications.model";
import { Node } from "src/pagination/models/node.model";
import { PasswordResetHistory } from "src/password_reset_history/models/password_reset_history.model";
import { UserRole } from "src/user_roles/models/user_role.model";
import { UserSession } from "src/user_sessions/models/user_sessions.model";
import { Column, Entity, OneToMany } from "typeorm";


@Entity()
@ObjectType()
export class User extends Node{

    @Field(() => String)
    @Column()
    firstName: string;

    @Field(() => String)
    @Column()
    lastName: string;

    @Field(() => String)
    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Field(() => String)
    @Column()
    status: string;

    @Field(() => Date)
    @Column('timestamp', {default: () => 'CURRENT_TIMESTAMP'})
    lastLogin: Date;

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    avatar?: string ;

    // one user can have many articles
    @OneToMany(() => Message, (target) => target.author)
    messages: Message[];

    @OneToMany(() => AuditLog, (auditLog) => auditLog.user)
    auditLogs: AuditLog[];
    

    @OneToMany(()=> UserRole, (userRole) => userRole.user)
    userRoles: UserRole[];

    
    @OneToMany(() => Auth, (auth) => auth.user)
    auths: Auth[];

    @OneToMany(() => UserSession, (userSession) => userSession.user)
    userSessions: UserSession[];

    @OneToMany(() => Notification, (notification) => notification.user)
    notifications: Notification[];

    @OneToMany(() => PasswordResetHistory, (passwordWordResetHistory) => passwordWordResetHistory.user)
    passwordWordResetHistorys: Notification[];

    @OneToMany(() => MfaKey, (mfaKey) => mfaKey.user)
    mfaKeys: MfaKey[];

}  