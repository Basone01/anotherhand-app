const host = "172.16.1.236"
module.exports = {
	API_ENDPOINT: process.env.NODE_ENV === 'development' ? `http://${host}/api` : '/api',
	IMAGE_ENDPOINT:process.env.NODE_ENV === 'development' ?`http://${host}` : ''
};
