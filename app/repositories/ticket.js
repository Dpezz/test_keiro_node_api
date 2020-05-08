var { Ticket, User } = require("../models");

exports.all = () => {
    return Ticket.findAll({
        include: [User],
    });
};

exports.find = (id) => {
    return Ticket.findByPk(id);
};

exports.findByUser = (user_id) => {
    return Ticket.findAll({
        include: [User],
        where: {
            user_id,
        },
    });
};
