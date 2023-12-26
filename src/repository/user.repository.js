import bcrypt from 'bcrypt';
import { db } from '../../models/index.js';

const { User } = db;

export class UsersRepository {
    updateOneById = async (id, data) => {
        const result = await User.update(
            {
                ...data,
            },
            {
                where: {
                    id,
                },
            },
        );

        return result;
    };

    deleteOneById = async (id) => {
        const result = await db.User.destroy({
            where: {
                id,
            },
        });

        return result;
    };

    createUser = async (hashCreateAuthData) => {
        const result = await db.User.create({
            ...hashCreateAuthData,
        });
        return result;
    };

    readOneByUserId = async (userId) => {
        const user = await db.User.findOne({
            where: {
                userId,
            },
        });
        return user;
    };
}
