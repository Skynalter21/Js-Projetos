const router = require('express').Router();

require('./DB/mongoConnection');

const portifolio = require('./portfolio')

router.use('/portifolio', portifolio);

module.exports = router