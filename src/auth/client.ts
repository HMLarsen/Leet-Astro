import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import { app } from "../firebase/client";

async function googleSignin() {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const userCredential = await signInWithPopup(auth, provider);
	const idToken = await userCredential.user.getIdToken();
	return fetch("/api/auth/signin", {
		headers: {
			Authorization: `Bearer ${idToken}`,
		},
	});
}

const clientAuth = {
	googleSignin
};
export default clientAuth;