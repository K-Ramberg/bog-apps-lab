var express = require('express');
var router = express.Router();
const {CreatureModel} = require('../db/schema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  CreatureModel.find().then((creatures)=>{
    res.send({
      creatures
    })
  })
});

router.get('/:id', async (req,res) => {
  const creature = await CreatureModel.findById(req.params.id)
  res.send({
    creature
  })
})

module.exports = router;
