const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
    // check header or url parameters or post parameters for token
    const authorization = req.headers["authorization"];
    const token = authorization ? authorization.replace("Bearer ", "") : null;

    if (token) {
        // verifies secret and checks exp
        const auth = jwt.decode(token);
        if (!auth || !auth.id) {
            return res.status(403).send({
                message: "Failed to authenticate token.",
            });
        } else {
            next();
        }
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            message: "No token provided.",
        });
    }
};
