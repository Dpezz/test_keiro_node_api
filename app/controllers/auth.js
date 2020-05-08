"use strict";

const bcrypt = require("bcrypt");
const { User, TypeUser } = require("../models");
const userRepository = require("../repositories/user");
const typeUserRepository = require("../repositories/typeUser");
const authService = require("../services/auth");

exports.login = (req, res) => {
    if (!req.body.email) {
        res.send({
            message: "Authentication failed. Email is required",
        });
    } else {
        userRepository.findByEmail(req.body.email).then((data) => {
            if (data === null) {
                res.send({
                    message: "Authentication failed. User not found.",
                });
            } else {
                if (
                    !bcrypt.compareSync(
                        req.body.password.toString(),
                        data.password
                    )
                ) {
                    res.send({
                        message: "Authentication failed. Wrong password.",
                    });
                } else {
                    const token = authService.setToken(data);
                    res.send(token);
                }
            }
        });
    }
};

exports.register = async (req, res) => {
    // revisar asociations sequelize
    const type_user = await typeUserRepository.find(req.body.type_user_id);
    if (type_user === null) {
        res.send({
            message: "Register failed. Wrong type_user_id.",
        });
    } else {
        try {
            const user = await User.create(req.body);
            userRepository
                .find(user.id)
                .then((data) => {
                    const token = authService.setToken(data);
                    res.send(token);
                })
                .catch((err) => {
                    res.send(err);
                });
        } catch (err) {
            res.status(400).send(err);
        }
    }
};

exports.profile = (req, res) => {
    const auth = authService.getAuth(req);

    if (auth === null || !auth.id) {
        res.status(403).send({
            message: "No token provided",
        });
    } else {
        res.send({ user: auth });
    }
};
