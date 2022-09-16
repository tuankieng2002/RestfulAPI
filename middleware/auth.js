const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
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

module.exports = verifyToken
