const jsonServer = require('json-server')
const path = require("path");
const {readFileSync} = require("fs");
const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(async (req, res, next) => {

    new Promise((res) => {
        setTimeout(res, 1000)
    })
    next()
})
server.use((req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(403).json({message: "Auth error"})
    }
    next()
})

server.use(router)

server.post("/login", (req, res, next) => {
    const {username, password} = JSON.parse(req.body)
    const db = JSON.parse(readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"))

    const { users } = db

    const userFromDb = users.find(user => user.username === username && user.password === password)

    if (userFromDb) {
        return res.json(userFromDb)

    }
    return res.status(403).json({message: "Auth error"})
})


server.listen(8000, () => {
    console.log('JSON Server is running')
})