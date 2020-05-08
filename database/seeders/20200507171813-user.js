"use strict";

const bcrypt = require("bcrypt");
const { TypeUser } = require("../../app/models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const admin = await TypeUser.findOne({
            where: {
                name: "ADMINISTRADOR",
            },
        });
        const user = await TypeUser.findOne({
            where: {
                name: "USUARIO",
            },
        });
        return await queryInterface.bulkInsert(
            "Users",
            [
                {
                    name: "Administrador",
                    email: "admin@keiro.cl",
                    password: bcrypt.hashSync("123", 10),
                    type_user_id: admin.id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Usuario",
                    email: "user@keiro.cl",
                    password: bcrypt.hashSync("123", 10),
                    type_user_id: user.id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
