<script lang="ts">
	import clientAuth from "../auth/client";

	async function googleSignin() {
		clientAuth
			.googleSignin()
			.then((res) => window.location.assign(res.url));
	}
</script>

<button on:click={googleSignin}>Sign in with Google</button>
