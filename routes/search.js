const gnews = require('gnews');
var express = require('express');
var router = express.Router();
const { config } = require('../utiles/util.js');


const words = ["藤沢", "N国", "RIZIN", "情報処理技術者試験"];


/* GET home page. */
router.get('/', function (req, res, next) {

	Promise
		.all(words.map(getGNews))
		.then(results => {
			// console.log(results)
			res.render('search', { results });
		});

});



function getGNews(word) {
	return gnews.search(word, config);
}

module.exports = router;
