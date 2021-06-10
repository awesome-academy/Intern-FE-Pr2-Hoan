const createUserRoute =  require('./createUser.route')

function makeUserRouter(router) {
	createUserRoute(router)
	return router
}

module.exports = makeUserRouter