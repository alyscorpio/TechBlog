const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          comment: {
              type: DataTypes.TEXT,
              allowNull: false
          },
          user_username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username',
            },
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.export = Comment;