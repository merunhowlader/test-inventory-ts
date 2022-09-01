import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import shortid from 'shortid';
import debug from 'debug';
const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao{
    users:Array<CreateUserDto>=[];
    constructor(){
        log('Created new instance of UserDao');
    }

    async addUser(user:CreateUserDto){
        user.id=shortid.generate();
        this.users.push(user);
        return user.id;

    }
    async getUsers(){
        return this.users;

    }
    async getUserById(userId:string){
        return this.users.find((user:{id:string})=>user.id==userId);
    }

    async putUserById(userId:string,user:PutUserDto){
        const objIndex =this.users.findIndex((obj:{id:string})=>obj.id===userId);
        this.users.splice(objIndex,1,user);
        return `${user.id} update via put`

    }

    async patchUserByid(userId:string,user:PatchUserDto){
        const objIndex =this.users.findIndex((obj:{id:string})=>obj.id===userId);
        let currentUser =this.users[objIndex];
        const allowedPatchFields =['password','firsName','lastName','permissionLevel'];
        for (let field of allowedPatchFields) {
            if (field in user) {
                // @ts-ignore
                currentUser[field] = user[field];
            }
        }
        this.users.splice(objIndex,1,currentUser);
        return `${user.id} patch`
    }

   

}

export default new UsersDao();