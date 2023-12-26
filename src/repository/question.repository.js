import { db } from '../../models/index.js';

export class QuestionRepository {
    createQuestion = async (createQuestionData) => {
        const result = await db.Question.create({
            ...createQuestionData,
        });
        return result;
    };
}
