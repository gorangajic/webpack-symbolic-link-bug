var Handlebars = require('handlebars/runtime').default;
module.exports = function() {
    var title = "<h1>" + this.title.toUpperCase() + "</h1>"
	return new Handlebars.SafeString(title);
};