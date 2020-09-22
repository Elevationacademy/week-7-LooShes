const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const mongoose = require("mongoose")
const { urlencoded } = require("body-parser")

const app = express()

app.use(static.path )
app.use(static.path, path =__dirname = '/node_modules')
app.use(bodyParser)
app.use(urlencoded, {extended: false})

app.use(mongoose)

const smthSchema =  Schema{
    typeSmth: String
}

mongoose.connect('smth', smthSchema)

const port = 3000
app.listen(console.log(`listen on ${port}`))

$(`button`).on("click", async function(){
    let container = await $(`#container`).append(`<div> </div>`)
})