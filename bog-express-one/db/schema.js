const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CreatureSchema = new Schema({
    name: {
        type: String,
        deault: "ALASKAN-BULL-WORM"
    },
    description: {
        type: String,
        default: "BIG....HAIRY....PINK"
    }
})

const CreatureModel = mongoose.model('Creature', CreatureSchema)

module.exports = {
    CreatureModel
}