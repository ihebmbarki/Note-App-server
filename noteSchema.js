var mongoose = require("mongoose")
var Schema = mongoose.Schema

var note = new Schema ({
    title: String,
    date: String,
    note: String
})

var Data = mongoose.model("Data", note)

module.exports = Data
    