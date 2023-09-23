import fetch from 'node-fetch-cache';

async function imageUrlToBase64(url: string) {
	const response = await fetch(url);
	const blob = await response.arrayBuffer();
	return Buffer.from(blob).toString('base64');
}

const utils = {
	imageUrlToBase64
};
export default utils;