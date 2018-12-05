const BucketModel = require('../models/bucket.js')
const DoneeModel = require('../models/donee.js')
const DonorModel = require('../models/donor.js')

async function findAllWishes(bucketId){
    const bucket = await BucketModel.findOne({ _id: bucketId })
    return bucket.wishList
}

async function findAll() {
    return BucketModel.find()
        .populate('wishList')
        .populate('donations')
}

async function del(_id) {
    return BucketModel.remove({ _id })
}

async function find(_id) {
    return BucketModel.findOne({ _id })
}

async function add(bucket) {
    return BucketModel.create(bucket)
}

async function addDonee( bucketId, doneeId ) {
    const donee = await DoneeModel.findOne({ _id: doneeId })
    const bucket = await BucketModel.findOne({ _id: bucketId })
    bucket.wishList.push(donee)

    await bucket.save()

    return bucket
}

async function addDonation( bucketId, donorId ) {
    const donor = await DonorModel.findOne({ _id: donorId })
    const bucket = await BucketModel.findOne({ _id: bucketId })
    bucket.donations.push(donor)

    await bucket.save()

    return bucket
}


module.exports = {
    findAllWishes,
    findAll,
    find,
    del,
    add,
    addDonee,
    addDonation
}