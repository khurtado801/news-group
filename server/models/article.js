const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    source: {
        id: String,
        name: String
    },
    author: String,
    title: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Article", articleSchema);