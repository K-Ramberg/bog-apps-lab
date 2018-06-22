var express = require('express');
var router = express.Router();
const { CreatureModel } = require('../db/schema')

/* GET home page. */
router.get('/', function (req, res) {
  CreatureModel.find().then((creatures) => {
    res.send({
      creatures
    })
  })
});

router.get('/:id', async (req, res) => {
  const creature = await CreatureModel.findById(req.params.id)
  res.send({
    creature
  })
})

router.post('/', (req,res) => {
    const newCreature = new CreatureModel(req.body)
    newCreature.save().then((creature) => {
      res.send(creature)
    })
})

router.delete('/:id', (req,res) => {
   CreatureModel.findByIdAndRemove(req.params.id)
    .then(()=>{
      CreatureModel.find().then((creatures) => {
        res.send({
          creatures
        })
      })
    })
})

module.exports = router;
