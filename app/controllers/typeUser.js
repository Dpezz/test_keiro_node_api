const typeUserRepository = require("../repositories/typeUser");

exports.all = (req, res) => {
    typeUserRepository.all().then((response) => {
        res.send(response);
    });
};
