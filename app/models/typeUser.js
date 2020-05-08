"use strict";
module.exports = (sequelize, DataTypes) => {
    const TypeUser = sequelize.define(
        "TypeUser",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                },
            },
        },
        {
            tableName: "Types_User",
        }
    );
    TypeUser.associate = function (models) {
        // associations can be defined here
        TypeUser.hasMany(models.User, { foreignKey: "type_user_id" });
    };
    return TypeUser;
};
