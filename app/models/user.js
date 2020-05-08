"use strict";

const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        "User",
        {
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                    notNull: true,
                    notEmpty: true,
                },
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            type_user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                    isInt: true,
                },
            },
        },
        {}
    );

    User.associate = (models) => {
        // associations can be defined here
        User.belongsTo(models.TypeUser, { foreignKey: "type_user_id" });
        User.hasMany(models.Ticket, { foreignKey: "user_id" });
    };

    User.beforeCreate((user, options) => {
        let hash = bcrypt.hashSync(user.password.toString(), 10);
        user.password = hash;
    });

    return User;
};
