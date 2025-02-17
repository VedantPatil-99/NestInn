const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
	},
	role: {
		type: String,
		enum: ["user", "admin", "host"],
		default: "user",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
