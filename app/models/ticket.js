"use strict";
module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define(
        "Ticket",
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isInt: true,
                    notNull: true,
                },
            },
            ticket_pedido: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                validate: {
                    notNull: true,
                },
            },
        },
        {}
    );
    Ticket.associate = function (models) {
        // associations can be defined here
        Ticket.belongsTo(models.User, { foreignKey: "user_id" });
    };
    return Ticket;
};
