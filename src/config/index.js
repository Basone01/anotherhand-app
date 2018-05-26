// const host = "https://d7a2f10b.ngrok.io"
const host = "172.16.0.116"
module.exports = {
	API_ENDPOINT: process.env.NODE_ENV === 'development' ? `http://${host}/api` : '/api',
	IMAGE_ENDPOINT:process.env.NODE_ENV === 'development' ?`http://${host}` : ''
};
