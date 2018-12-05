const mongoose = require('mongoose')

const DonorSchema = new mongoose.Schema({
    donorName: String,
    donorBankAccountNo: Number,
    amountofVotes: Number,
    donation: Number
})

module.exports = mongoose.model('Donor', DonorSchema)
