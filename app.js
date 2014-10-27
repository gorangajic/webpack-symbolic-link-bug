var bookListingTemplate = require("./book-listing.handlebars");

document.getElementById('main').innerHTML = bookListingTemplate({
	username: "test",
	books: [
		{ title: "A book", synopsis: "With a description" },
		{ title: "Another book", synopsis: "From a very good author" },
		{ title: "Book without synopsis" }
	]
});