"use strict";

const Sequelize = require("sequelize");
const { Ticket } = require("../models");

const ticketRepository = require("../repositories/ticket");
const userRepository = require("../repositories/user");

exports.all = (req, res) => {
    ticketRepository.all().then((response) => {
        res.send(response);
    });
};

exports.store = async (req, res) => {
    const user = await userRepository.find(req.body.user_id);

    if (user === null) {
        res.send({
            message: "Ticket failed. user_id didn't find.",
        });
    } else {
        Ticket.create(req.body)
            .then((response) => {
                res.send(response);
            })
            .catch((err) => {
                res.send(err);
            });
    }
};

exports.show = (req, res) => {
    ticketRepository.find(req.params.id).then((data) => {
        res.send(data);
    });
};

exports.update = async (req, res) => {
    const user = await userRepository.find(req.body.user_id);

    if (user === null) {
        res.send({
            message: "Ticket failed. user_id didn't find.",
        });
    } else {
        ticketRepository.find(req.params.id).then((data) => {
            data.update(req.body)
                .then((response) => {
                    res.send(response);
                })
                .catch((err) => {
                    res.send(err);
                });
        });
    }
};

exports.destroy = (req, res) => {
    ticketRepository.find(req.params.id).then((data) => {
        if (data) data.destroy();
        res.send(data);
    });
};
