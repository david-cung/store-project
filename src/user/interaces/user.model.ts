/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
export interface User {
    readonly id: string;
    username: String;
    password: String;
    isActive: boolean;
};

export type UserForCreate = Omit<User, 'id' | 'isActive'>;