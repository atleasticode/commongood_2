const DonorModel = require('../models/donor.js')

async function findAll() {
    return DonorModel.find()
}

async function del(_id) {
    return DonorModel.remove({ _id })
}

async function find(_id) {
    return DonorModel.findOne({ _id })
}

async function add(donor) {
    return DonorModel.create(donor)
}


module.exports = {
    findAll,
    find,
    del,
    add
}
