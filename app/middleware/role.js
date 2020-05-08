const jwt = require("jsonwebtoken");
const { TypeUser } = require("../models");

exports.admin = async (req, res, next) => {
    const authorization = req.headers["authorization"];
    const token = authorization ? authorization.replace("Bearer ", "") : null;

    if (token) {
        const auth = jwt.decode(token);
        if (!auth || !auth.id) {
            return res.status(403).send({
                message: "Failed to authenticate token.",
            });
        } else {
            const type_user = await TypeUser.findOne({
                where: {
                    name: "Administrador",
                },
            });
            if (type_user.id != auth.type_user_id) {
                return res.status(403).send({
                    message: "Failed role token.",
                });
            } else {
                next();
            }
        }
    } else {
        return res.status(403).send({
            message: "No token provided.",
        });
    }
};

exports.user = async (req, res, next) => {
    const authorization = req.headers["authorization"];
    const token = authorization ? authorization.replace("Bearer ", "") : null;

    if (token) {
        const auth = jwt.decode(token);
        if (!auth || !auth.id) {
            return res.status(403).send({
                message: "Failed to authenticate token.",
            });
        } else {
            const type_user = await TypeUser.findOne({
                where: {
                    name: "Usuario",
                },
            });
            if (type_user.id != auth.type_user_id) {
                return res.status(403).send({
                    message: "Failed role token.",
                });
            } else {
                next();
            }
        }
    } else {
        return res.status(403).send({
            message: "No token provided.",
        });
    }
};
