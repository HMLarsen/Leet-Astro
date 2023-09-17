<script>
	import {
	    GoogleAuthProvider,
	    getAuth,
	    signInWithPopup,
	} from "firebase/auth";
	import { app } from "../firebase/client";

	const auth = getAuth(app);

	async function googleSignin() {
		const provider = new GoogleAuthProvider();
		const userCredential = await signInWithPopup(auth, provider);
		const idToken = await userCredential.user.getIdToken();
		const res = await fetch("/api/auth/signin", {
			headers: {
				Authorization: `Bearer ${idToken}`,
			},
		});
		if (res.redirected) {
			window.location.assign(res.url);
		}
	}
</script>

<button on:click={googleSignin}>Sign in with Google</button>
