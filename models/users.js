import { Model, DataTypes } from 'sequelize';

export default class User extends Model {
    // 해당 모델의 정보를 초기화 하는 정적 메서드
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
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                },
                role: {
                    type: DataTypes.ENUM(['manager', 'customer']),
                    allowNull: false,
                    defaultValue: 'customer',
                },
            },
            {
                // 테이블에 추가적인 설정
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'User',
                tableName: 'users',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            },
        );
    }

    // 해당 모델의 관계를 정의하는 정적 메서드
    static associate(db) {
        db.User.hasMany(db.Question, {
            as: 'questions',
            foreignKey: 'userId',
            sourceKey: 'id',
        });
        db.User.hasMany(db.Answer, {
            as: 'answers',
            foreignKey: 'userId',
            sourceKey: 'id',
        });
    }
}
