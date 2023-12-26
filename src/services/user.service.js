import { UsersRepository } from '../repository/user.repository.js';
export class UsersService {
    usersRepository = new UsersRepository();
    getUserById = async (userId) => {
        return await this.usersRepository.readOneById(userId);
    };
}
