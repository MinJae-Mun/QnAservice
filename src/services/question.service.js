import { QuestionRepository } from '../repository/question.repository.js';
import { UsersService } from './user.service.js';

export class QuestionService {
    questionRepository = new QuestionRepository();
    userService = new UsersService();

    createQuestion = async (createQuestionData) => {
        const { userId } = createQuestionData;

        const user = await this.userService.getUserById(userId);

        if (!user) {
            const error = new Error('존재하지 않는 사용자입니다.');
            error.status = 404;
            throw error;
        }

        const result = await this.questionRepository.createQuestion(
            createQuestionData,
        );

        return {
            ok: true,
            message: '질문을 성공적으로 등록하셨습니다.',
            data: result,
        };
    };
}
