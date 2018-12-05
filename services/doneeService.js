const DoneeModel = require('../models/donee.js')

async function findAll() {
    return DoneeModel.find()
}

async function del(_id) {
    return DoneeModel.remove({ _id })
}

async function find(_id) {
    return DoneeModel.findOne({ _id })
}

async function add(donee) {
    return DoneeModel.create(donee)
}


module.exports = {
    findAll,
    find,
    del,
    add
}