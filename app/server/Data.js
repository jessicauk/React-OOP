const data = require('../src/json/data.json');

class Data {
	constructor(app) {
		const getData = (req, res, next) => {
			if (data !== '') {
				res.locals.data = data;
				next();
			}
		}
		app.get('/getData', getData, (req, res) => res.send(res.locals.data));
	}
}

module.exports = Data;