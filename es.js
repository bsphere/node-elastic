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

ES.prototype.index = function(index, type, id, doc, callback) {
	request({method: 'PUT', url: this.url + '/' + index + '/' + type + '/' + id, body: JSON.stringify(doc)}, function(err, res, body) {
		if (err) { return callback(err); }
		callback();
	});
};

ES.prototype.mapping = function(index, type, settings, callback) {
	request({method: 'PUT', url: this.url + '/' + index + '/' + type + '/_mapping', body: JSON.stringify(settings)}, function(err, res, body) {
		if (err) { return callback(err); }
		callback();
	});
};

ES.prototype.delete = function(index, type, id, callback) {
	request({method: 'DELETE', url: this.url + '/' + index + '/' + type + '/' + id}, function(err, headers, body) {
		if (err) { return callback(err); }
		callback(null, body);
	});
};