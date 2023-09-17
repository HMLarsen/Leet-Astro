import { getAuth } from "firebase-admin/auth";
import { app } from "./firebase/server";

async function getUser(session?: string) {
	if (!session) return undefined;
	const auth = getAuth(app);
	const decodedCookie = await auth.verifySessionCookie(session);
	return auth.getUser(decodedCookie.uid);
}

const utils = {
	getUser
};
export default utils;