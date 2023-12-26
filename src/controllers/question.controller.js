import { QuestionService } from '../services/question.service.js';

export class QuestionController {
    questionService = new QuestionService();

    createQuestion = async (req, res, next) => {
        try {
            const userId = req.user.userId;
            const createQuestionData = {
                ...req.body,
                userId,
            };

            const isValidData =
                createQuestionData['userId'] &&
                'question' in createQuestionData;

            if (!isValidData) {
                const error = new Error('유효하지 않은 데이터입니다.');
                error.status = 400;
                throw error;
            }

            const result = await this.questionService.createQuestion(
                createQuestionData,
            );

            return res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    };
}
