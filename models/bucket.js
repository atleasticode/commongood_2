const mongoose = require('mongoose')

const BucketSchema = new mongoose.Schema({
    bucketName: String,
    bucketLimit: Number,
    bucketTotal: Number,
    wishList: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Donee' 
    }],
    donations: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Donor'
    }]
})

module.exports = mongoose.model('Bucket', BucketSchema)