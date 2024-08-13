const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.json({
        msg: "hi there dhiraj from dummy backend"
    })
})

app.listen(3000)