var { User, TypeUser } = require("../models");

exports.all = () => {
    return User.findAll({
        attributes: { exclude: ["password"] },
        include: [
            {
                model: TypeUser,
                where: {
                    name: "Usuario",
                },
            },
        ],
    });
};

exports.find = async (id) => {
    return await User.findOne({
        where: {
            id,
        },
        attributes: { exclude: ["password"] },
        include: [TypeUser],
    });
};

exports.findByEmail = (value) => {
    return User.findOne({
        where: {
            email: value,
        },
        include: [TypeUser],
    });
};
