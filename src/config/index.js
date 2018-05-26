module.exports = {
	API_ENDPOINT: process.env.NODE_ENV === 'development' ? 'http://c62958be.ngrok.io/api' : '/api',
	IMAGE_ENDPOINT:process.env.NODE_ENV === 'development' ?'http://c62958be.ngrok.io' : ''
};
