import Sequelize from 'sequelize';
import * as configEX from '../config/config.js';
import User from './users.js';
import Question from './questions.js';
import Answer from './answers.js';

const env = process.env.NODE_ENV || 'development';
const config = configEX[env];
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
);
db.sequelize = sequelize;

db.User = User;
db.Question = Question;
db.Answer = Answer;

User.init(sequelize);
Question.init(sequelize);
Answer.init(sequelize);

User.associate(db);
Question.associate(db);
Answer.associate(db);

export { db };
