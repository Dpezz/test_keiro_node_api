"use strict";

const jwt = require("jsonwebtoken");

exports.getAuth = (req) => {
    return jwt.decode(getToken(req), process.env.APP_KEY);
};

exports.setToken = (data) => {
    return {
        access_token: jwt.sign(
            {
                email: data.email,
                name: data.name,
                type_user_id: data.type_user_id,
                type_user: {
                    id: data.TypeUser.id,
                    name: data.TypeUser.name,
                },
                id: data.id,
            },
            process.env.APP_KEY,
            {
                expiresIn: "1d",
            }
        ),
    };
};

const getToken = (req) => {
    const authorization = req.headers["authorization"];
    const token = authorization ? authorization.replace("Bearer ", "") : null;
    return token;
};
