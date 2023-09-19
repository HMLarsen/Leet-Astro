<script lang="ts">
	import type { User } from "firebase/auth";
	import { onMount } from "svelte";
	import clientAuth from "../auth/client";

	let loading = true;
	let user: User | null;

	async function logout() {
		await clientAuth.logout();
		redirectToHome();
	}

	function redirectToHome() {
		window.location.assign("/");
	}

	onMount(async () => {
		user = await clientAuth.getUser();
		if (!user) redirectToHome();
		loading = false;
	});
</script>

{#if loading}
	carregando...
{:else if user}
	<button on:click={logout}>Logout</button>
	<h1>
		<img src={user.photoURL} alt="user logo" />
		{user.displayName}
	</h1>

	<a href="/dashboard/eventos">Eventos</a>
	<slot />
{/if}
