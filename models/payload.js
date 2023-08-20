const mongoose = require('mongoose');

const PayloadSchema = new mongoose.Schema({
    payload: Object
})

const Payload = mongoose.model("Payload", PayloadSchema)

module.exports = Payload;