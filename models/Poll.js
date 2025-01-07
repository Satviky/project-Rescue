const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    language: String,
    votes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Poll', pollSchema);
