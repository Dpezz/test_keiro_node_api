const express = require("express");
const cors = require("cors");
const router = express.Router();

const authController = require("../app/controllers/auth");
const userController = require("../app/controllers/user");
const typeUserController = require("../app/controllers/typeUser");
const ticketController = require("../app/controllers/ticket");
const ticketUserController = require("../app/controllers/ticketUser");

const authMiddleware = require("../app/middleware/auth");
const roleMiddleware = require("../app/middleware/role");

router.use(cors());

// index
router.get("/", (req, res) => {
    res.send("welcome to API!");
});

// auth
router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);

router.get("/types_user", typeUserController.all);

// ::: middleware AUTH::: //
router.use(authMiddleware.auth);

// auth
router.get("/auth/profile", authController.profile);


// users
router.get("/users", roleMiddleware.admin, userController.all);

// tickets
router.get("/tickets", roleMiddleware.admin, ticketController.all);
router.get("/tickets/:id", roleMiddleware.admin, ticketController.show);
router.post("/tickets", roleMiddleware.admin, ticketController.store);
router.put("/tickets/:id", roleMiddleware.admin, ticketController.update);
router.delete("/tickets/:id", roleMiddleware.admin, ticketController.destroy);

// tickets User
router.get("/tickets_user", roleMiddleware.user, ticketUserController.all);
router.put(
    "/tickets_user/:id",
    roleMiddleware.user,
    ticketUserController.update
);

module.exports = router;
