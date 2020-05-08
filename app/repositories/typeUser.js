const { TypeUser } = require("../models");

exports.all = () => {
    return TypeUser.findAll();
};

exports.find = async (id) => {
    return await TypeUser.findByPk(id);
};
