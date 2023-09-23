import { fetchBuilder, MemoryCache } from 'node-fetch-cache';

const fetch = fetchBuilder.withCache(new MemoryCache());

async function imageUrlToBase64(url: string) {
	const response = await fetch(url)
	const blob = await response.arrayBuffer();
	return Buffer.from(blob).toString('base64');
}

const utils = {
	imageUrlToBase64
};
export default utils;