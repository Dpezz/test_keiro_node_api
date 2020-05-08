"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Types_User",
            [
                {
                    name: "Administrador",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Usuario",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Types_User", null, {});
    },
};
