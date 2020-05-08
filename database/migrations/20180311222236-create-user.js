"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                required: true,
            },
            email: {
                type: Sequelize.STRING,
                required: true,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
                required: true,
            },
            type_user_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                required: true,
            },
            createdAt: {
                allowNull: false,
                defaultValue: Sequelize.NOW,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                defaultValue: Sequelize.NOW,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Users");
    },
};
