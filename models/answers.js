import { Model, DataTypes } from 'sequelize';

export default class Answer extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                userId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                questionId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                answer: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'Answer',
                tableName: 'answers',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            },
        );
    }

    static associate(db) {
        db.Answer.belongsTo(db.User, {
            foreignKey: 'userId',
            targetKey: 'id',
        });
        db.Answer.belongsTo(db.Question, {
            foreignKey: 'questionId',
            targetKey: 'id',
        });
    }
}
