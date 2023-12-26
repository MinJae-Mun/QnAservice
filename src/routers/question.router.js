import express from 'express';
import { QuestionController } from '../controllers/question.controller.js';
import { isAuth } from '../../middlewares/authMiddleware.js';

const router = express.Router();

const questionController = new QuestionController();

router.post('/question', isAuth, questionController.createQuestion);

export { router as QuestionRouter };
