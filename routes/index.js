const gnews = require('gnews');
var express = require('express');
var router = express.Router();

const config = {
	country: 'jp',
	language: 'ja',
	n: 5
};

/* GET home page. */
router.get('/', function (req, res, next) {

	Promise.all([
		// gnews.headlines(config),
		// gnews.topic('WORLD', config),
		// gnews.topic('BUSINESS', config),
		// gnews.topic('TECHNOLOGY', config),
		// gnews.topic('ENTERTAINMENT', config),
		// gnews.topic('SPORTS', config),
		// gnews.geo('New York', config),
		gnews.topic('HEALTH', config),
		gnews.search('N国', config),
	]).then(results => {
		// console.log(results)
		res.render('index', { results });
	});

});

module.exports = router;
