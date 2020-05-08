const userRepository = require("../repositories/user");

const all = (req, res) => {
    userRepository.all().then((response) => {
        res.send(response);
    });
};

module.exports = { all };
