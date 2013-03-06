var request = require('request');

var ES = module.exports = function(url) {
	this.url = url;
};

ES.prototype.search = function(index, type, obj, callback) {
	request.post({url: this.url + '/' + index + '/' + type + '/_search', body: JSON.stringify(obj)}, function(err, headers, body) {
		if (err) { return callback(err); }
		callback(null, body);
	});
};