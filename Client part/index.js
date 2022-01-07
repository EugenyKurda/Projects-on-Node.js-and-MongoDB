const express = require('express')
const bodyParser = require('body-parser')

const { connect, disconnect } = require('./utils/database')

const postsRoutes = require('./routes/posts')

const app = express()

app.set("view engine", "ejs")
app.set("views", "views")
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(postsRoutes)

app.get('/disconnect', (req, res) => {
    disconnect(() => {
        res.send('The MongoDB connection was closed')
    })
})


connect((error) => {
    if (error) {
        console.log(error)
    }

    app.listen(3000, () => {
        console.log('It is running')
    })
})