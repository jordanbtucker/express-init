/**
 * @param {(req: Request, res: Response, next?: (err?) => void) => Promise} middleware
 */
function middlewarify (middleware) {
	return (req, res, next) => {
		Promise.resolve(middleware(req, res, next)).catch(next)
	}
}

module.exports = middlewarify
