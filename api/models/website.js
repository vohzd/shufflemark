const mongoose    = require("mongoose");
const Schema      = mongoose.Schema;

const schema = new Schema({
	name: { type: String, required: false },
	url: { type: String, required: true, unique: true },
	createdAt: {type: Date, default: Date.now }
});

module.exports = mongoose.model("websites", schema);
