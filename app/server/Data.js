const data = require('../src/json/data.json');

class Data {
	constructor(app) {
		const getData = (req, res, next) => {
			if (data !== '' || data !== undefined) {
				res.locals.data = data;
				next();
			}
		}

		const postData = (req, res, next) => {
			console.log(req.body);
			const bodyData = req.body;
			if (data !== '' || data !== undefined) {
				data.data.push({bodyData});
				res.locals.data = data;
				next();
			}
		}

		app.get('/getData', getData, (req, res) => res.send(res.locals.data));
		app.post('/postData', postData, (req, res) => res.send(res.locals.data));
	}
}

module.exports = Data;