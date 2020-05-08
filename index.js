const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv/config");

// parser
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());

// routes
app.use("/api", require("./routes"));

// start serve
const domain = process.env.APP_URL,
    port = process.env.APP_PORT;
app.listen(port, function () {
    console.log(`Node server running on ${domain}:${port}`);
});
