const ticketRepository = require("../repositories/ticket");
const authService = require("../services/auth");

exports.all = (req, res) => {
    const auth = authService.getAuth(req);

    if (auth === null || !auth.id) {
        res.status(400).send({
            success: false,
            message: "No token provided",
        });
    } else {
        ticketRepository.findByUser(auth.id).then((data) => {
            res.send(data);
        });
    }
};

exports.update = (req, res) => {
    ticketRepository.find(req.params.id).then((data) => {
        const auth = authService.getAuth(req);

        if (data === null || data.user_id != auth.id) {
            res.status(400).send({
                message: "Invalid data",
            });
        } else {
            data.update({ ticket_pedido: true })
                .then((response) => {
                    res.send(response);
                })
                .catch((err) => {
                    res.send(err);
                });
        }
    });
};
