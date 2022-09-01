export interface PutUserDto {
    id: string;
    email: string;
    password: string;
    firsName: string;
    lastName: string;
    permissionLevel: number;    
}