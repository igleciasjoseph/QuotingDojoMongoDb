const Quotes = require('../controllers/Quotes');

module.exports = function(app) {
    app.get("/", Quotes.index);
    app.post("/add", Quotes.add);
    app.get("/quotes", Quotes.display);
}