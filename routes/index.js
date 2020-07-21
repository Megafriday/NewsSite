const gnews = require('gnews');
var express = require('express');
var router = express.Router();
const { config } = require('../utiles/util.js');


/* GET home page. */
router.get('/', function (req, res, next) {

	Promise.all([
		gnews.headlines(config),
		gnews.topic('WORLD', config),
		gnews.topic('BUSINESS', config),
		gnews.topic('TECHNOLOGY', config),
		// gnews.topic('ENTERTAINMENT', config),
		// gnews.topic('SPORTS', config),
		gnews.topic('HEALTH', config),
		// gnews.geo('New York', config),
		// gnews.search('藤沢', config),
		// gnews.search('N国', config),
		// gnews.search('RIZIN', config),
		// gnews.search('K1', config),
		// gnews.search('情報処理技術者試験', config),
	]).then(results => {
		// console.log(results)
		res.render('index', { results });
	});

});

module.exports = router;
