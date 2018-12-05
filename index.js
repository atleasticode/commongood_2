const DonorService = require('./services/donorService.js')
const DoneeService = require('./services/doneeService.js')
const BucketService = require('./services/bucketService.js')

require('./mongo-connection')

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())

// use pug files instead of HTML
app.set('view engine', 'pug')
app.use(bodyParser.json())


app.get('/', (_, res) => {
    res.render('index')
})

/* DONOR ENDPOINTS */
//all donors page
app.get('/donors/all', async(_, res) => {
    const donors = await DonorService.findAll()
    res.send(donors)
})

// add donor
app.post('/donor', async (req, res) => {
    const donor = await DonorService.add(req.body)
    res.send(donor)
})

// delete donor
app.delete('/donor/:id', async (req, res) => {
    const donor = await DonorService.del(req.params.id)
    res.send('ok!')
  })



/* DONEE ENDPOINTS */
//all donees page
app.get('/donees/all', async(_, res) => {
    const donees = await DoneeService.findAll()
    res.send(donees)
})

// add donee
app.post('/donee', async (req, res) => {
    const donee = await DoneeService.add(req.body)
    res.send(donee)
})

// delete donee
app.delete('/donee/:id', async (req, res) => {
    const donee = await DoneeService.del(req.params.id)
    res.send('ok!')
  })


/* BUCKET ENDPOINTS */
//all buckets page 
app.get('/buckets/all', async(_, res) => {
    const buckets = await BucketService.findAll()
    res.send(buckets)
})

// add bucket
app.post('/bucket', async (req, res) => {
    const bucket = await BucketService.add(req.body)
    res.send(bucket)
})

// delete bucket
app.delete('/bucket/:id', async (req, res) => {
    const bucket = await BucketService.del(req.params.id)
    res.send('ok!')
  })

// add donee to bucket 
app.post('/bucket/addDonee', async (req, res) => {
    const bucket = await BucketService.addDonee(req.body.bucketId, req.body.doneeId)
    res.send(bucket)
  })

// add donation to bucket
app.post('/bucket/addDonation', async (req, res) => {
    const bucket = await BucketService.addDonation(req.body.bucketId, req.body.donorId)
    res.send(bucket)
  })



app.listen(3000, () => {
    console.log('Server listening')
  })