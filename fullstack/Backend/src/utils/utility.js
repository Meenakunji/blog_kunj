
// const selectRequestDomain = (domainReq = JSON.stringify({domainOrigin: 'FanTiger'})) => {
// 	let req = JSON.parse(domainReq)
// 	if(!req) req = {
// 		domainOrigin: 'FanTv'
// 	}
// 	if(req.domainOrigin == 'FanTiger' || req.domainOrigin == 'FanTv') {
// 		return req.domainOrigin;
// 	}
// 	if(req.domainOrigin == 'unknown' && req.osType == 'android') {
// 		return 'FanTiger';
// 	}
// 	return 'FanTv';
// }

// module.exports = { 
// 	selectRequestDomain
// }