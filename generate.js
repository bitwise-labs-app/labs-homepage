const webgen = require("webgen");
const path = require("path");

webgen.render(
    __dirname,
    path.join(__dirname, "./out"),
    "7b4e53b8-1c1e-4edb-b5af-a35b59e045b2"
);