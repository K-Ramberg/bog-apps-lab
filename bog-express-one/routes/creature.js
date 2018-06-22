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


router.get('/:id', (req,res) => {
  const creature = await CreatureModel.findById(req.params.id)
  res.send({
    creature
  })
})

module.exports = router;
