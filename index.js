/**
 * Reject a promise after a set timeout
 * @param {promise} promise - input promise
 * @param {object} [options] - options object
 * @param {number} [options.timeout] - timeout in milliseconds
 *
 * @returns {promise}
**/
function timeout(promise, options = {}) {
	return new Promise((resolve, reject) => {
		let isRejected = false;
		const timeout = setTimeout(() => {
			isRejected = true;
			const error = new Error('Promise Timeout');
			error.name = 'TimeoutError';
			error.code = 'promise_timeout';
			reject(error);
		}, (options.timeout || 500));

		promise.then((value) => {
			if (!isRejected) {
				clearTimeout(timeout);
				resolve(value);
			}
		}).catch((error) => {
			if (!isRejected) {
				clearTimeout(timeout);
				reject(error);
			}
		});
	});
}

module.exports = timeout;
