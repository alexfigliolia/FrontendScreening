const jsonServer = require("json-server")
const server = jsonServer.create()

const middlewares = jsonServer.defaults()

const fields = require("./fields")
const { states, countries } = require("./statesAndCountries");

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.get("/form", (req, res) => {
    res.status(200).json(fields);
})

server.get("/states", (req, res) => {
    res.status(200).json(states);
})

server.get("/countries", (req, res) => {
    res.status(200).json(countries);
})

server.post("/form", (req, res) => {
    var crypto = require("crypto");
    var id = crypto.randomBytes(20).toString("hex");
    res.status(201).json(id);
})

server.listen(3100, () => {
    console.log("JSON Server is running")
})