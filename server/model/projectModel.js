const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    imgurl: {
        type: String,
        required: true,
    },
    codeurl: {
        type: String,
        required: true,
    },
    siteurl: {
        type: String,
        required: true,
    },
    languages: {
        type: Array,
        required: true,
    },
    favorite: {
        type: Boolean,
        required: true,
    },
    list: {
        type: String,
    },
});

module.exports = mongoose.model("Project", projectSchema);
