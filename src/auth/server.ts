import { getAuth } from "firebase-admin/auth";
import { app } from "../firebase/server";

async function getUser(token: string) {
	const auth = getAuth(app);
	const decodedToken = await auth.verifyIdToken(token);
	return auth.getUser(decodedToken.uid);
}

const serverAuth = {
	getUser
};
export default serverAuth;