import { AnswerRepository } from '../repository/answer.repository.js';
import { UsersService } from './user.service.js';

export class AnswerService {
    answerRepository = new AnswerRepository();
    userService = new UsersService();

    createAnswer = async (createAnswerData) => {
        const { userId } = createAnswerData;

        const user = await this.userService.getUserById(userId);

        if (!user) {
            const error = new Error('존재하지 않는 사용자입니다.');
            error.status = 404;
            throw error;
        }

        const result = await this.answerRepository.createAnswer(
            createAnswerData,
        );

        return {
            ok: true,
            message: '답변을 성공적으로 등록하셨습니다.',
            data: result,
        };
    };
}
