exports.showSignin = (req, res) => {
	res.render('signin.html')
}
exports.handleSignin = (req, res) => {
	res.send("handleSignin")
}
exports.showSignup = (req, res) => {
	res.send("showSignup")
}
exports.handleSignup = (req, res) => {
	res.send("handleSignup")
}
exports.handleSignout = (req, res) => {
	res.send("handleSignout")
}