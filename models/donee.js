const mongoose = require('mongoose')

const DoneeSchema = new mongoose.Schema({
    doneeName: String,
    wish: {
        wishName: String,
        wishExpense: Number,
        votes: Number
    },
})

module.exports = mongoose.model('Donee', DoneeSchema)