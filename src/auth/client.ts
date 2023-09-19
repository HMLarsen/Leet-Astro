import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, } from "firebase/auth";
import { app } from "../firebase/client";

async function getIdToken() {
	const auth = getAuth(app);
	await auth.authStateReady(); // wait load user from firebase
	return auth.currentUser?.getIdToken(true);
}

async function makeRequest(endpoint: string) {
	const idToken = await getIdToken();
	return fetch(endpoint, {
		headers: {
			Authorization: `Bearer ${idToken}`,
		},
	});
}

async function isAuthenticated() {
	const idToken = await getIdToken();
	return !!idToken;
}

async function googleSignin() {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	return signInWithPopup(auth, provider);
}

async function logout() {
	const auth = getAuth(app);
	return signOut(auth);
}

const clientAuth = {
	makeRequest,
	isAuthenticated,
	googleSignin,
	logout
};
export default clientAuth;