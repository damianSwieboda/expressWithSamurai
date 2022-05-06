
const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
    title: { type: String, required: [true, "Należy wpisać tytuł"]},
    description: { type: String, required: [true, "Należy wpisać opis"]},
    created: {type: Date, default: Date.now},
});
module.exports = mongoose.model('News', newsSchema)