const jwt = require('jsonwebtoken')
const User = require('../model/User')

exports.verifyToken = async (req, res, next) => {
	const authHeader = req.header('Authorization')
	const token = authHeader && authHeader.split(' ')[1]//cat va lay phan tu thu 2

	if (!token)
		return res
			.status(401)
			.json({ success: false, message: 'Please Login for access this resource' })

	try {
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

		req.userId = await decoded.userId
		next()
	} catch (error) {
		console.log(error)
		return res.status(403).json({ success: false, message: 'Invalid token' })
	}
}

// Admin Roles
exports.isAdmin = async (req, res, next) => {
	const user = await User.findById(req.userId)
	if (user.role !== 'admin')
		return res
			.status(403)
			.json({ success: false, message: 'Admin resources access denied' })

	next()
}
