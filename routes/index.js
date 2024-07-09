var express = require('express');
var router = express.Router();

const controller = require("../controllers/controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flappybara' });
});

router.get('/data', controller.leaderboardData);

router.post('/', controller.leaderboardPost);

module.exports = router;