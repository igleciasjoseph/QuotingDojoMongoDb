const mongoose = require("mongoose");
const Quote = mongoose.model("Quote");

class Quotes {
    index(req, res) {
        Quote.find({}, (err, Quotes) => {
            if(err) {
                console.log(err);
            }
            res.render("index", {Quotes});
        });
    }
    add(req, res) {
        let q = new Quote(req.body);
        q.save(err => {
            if(err) {
                console.log(err);
            }
            res.redirect("/quotes")
        })
    }
    display(req, res) {
        Quote.find({}, (err, Quotes) => {
            if (err) {
                console.log(err);
            }
            res.render("quotes", { Quotes });
        }).sort({name: -1});
    }
}

module.exports = new Quotes();