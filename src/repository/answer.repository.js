import { db } from '../../models/index.js';

export class AnswerRepository {
    createAnswer = async (createAnswerData) => {
        const result = await db.Answer.create({
            ...createAnswerData,
        });
        return result;
    };
}
