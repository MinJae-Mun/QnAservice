import express from 'express';
import { AnswerController } from '../controllers/answer.controller.js';
import { isAuth } from '../../middlewares/authMiddleware.js';

const router = express.Router();

const answerController = new AnswerController();

router.post('/answer/:questionId', isAuth, answerController.createAnswer);

export { router as AnswerRouter };
