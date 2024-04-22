export interface User {
    id: number;
    name: string;
    password: string;
};

export const isValidUser = (user: unknown): user is User => {
    return typeof user === 'object' && user !== null && 'name' in user && 'password' in user;
};