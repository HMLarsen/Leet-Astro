import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, } from "firebase/auth";
import { app } from "../firebase/client";

async function getIdToken() {
	const user = await getUser();
	return user?.getIdToken();
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
	const user = await getUser();
	return !!user;
}

async function getUser() {
	const auth = getAuth(app);
	await auth.authStateReady(); // wait load user from firebase
	return auth.currentUser;
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
	getUser,
	googleSignin,
	logout
};
export default clientAuth;