require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const { CreatureModel } = require('./schema')

const bogBear = new CreatureModel({
    name: "Big Bad Bog Bear",
    description: "it's big, hairy, and scary"
})
const bogLog = new CreatureModel({
    name: "Barky",
    description: "that's no log, THATS A..."
})
const boggyBob = new CreatureModel({
    name: "Boggy Bob the Bog Slob",
    description: "he's not your father's typical bog slob Bob"
})

CreatureModel.remove({})
.then(() => bogBear.save())
.then(() => bogLog.save())
.then(() => boggyBob.save())
.then(() => console.log('Saved the Seeds'))
.then(() => mongoose.connection.close())