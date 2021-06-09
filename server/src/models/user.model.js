const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
	username: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	role: {
		type: String,
		default: 'user',
	},
	created_at: {
		type: Date,
		default: Date.now
	}
})

const bcrypt = require("bcrypt")

UserSchema.pre("save", async function(next) {
	this.password = await bcrypt.hash(this.password, 5)
	next()
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel