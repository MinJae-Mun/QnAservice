import { AnswerService } from '../services/answer.service.js';

export class AnswerController {
    answerService = new AnswerService();

    createAnswer = async (req, res, next) => {
        try {
            const userId = req.user.userId;
            const questionId = req.params.questionId;
            const createAnswerData = {
                ...req.body,
                userId,
                questionId,
            };

            const isValidData =
                createAnswerData['userId'] &&
                'answer' in createAnswerData &&
                'questionId' in createAnswerData;

            if (!isValidData) {
                const error = new Error('유효하지 않은 데이터입니다.');
                error.status = 400;
                throw error;
            }

            const result = await this.answerService.createAnswer(
                createAnswerData,
            );

            return res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    };
}
