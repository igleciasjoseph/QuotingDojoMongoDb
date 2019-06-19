const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"],
    },
    quote: {
        type: String,
        required: [true, "Quote is required..."],
        minlength: [3, "Quote must be at least 3 characters long"],
    },
    time: {
        type: Date,
        default: Date.now()
    }
}, {timestamps: true});

mongoose.model("Quote", QuoteSchema);