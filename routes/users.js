const gnews = require('gnews');
var express = require('express');
var router = express.Router();

const config = {
	country: 'jp',
	language: 'ja',
	n: 5
};

/* GET users listing. */
router.get('/', function (req, res, next) {

	async function main() {
		const healths = await gnews.topic('HEALTH', config);

		res.render('users', { healths });
	}
	main();
});

module.exports = router;
