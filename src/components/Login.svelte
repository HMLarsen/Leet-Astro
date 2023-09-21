<script lang="ts">
	import { onMount } from "svelte";
	import clientAuth from "../auth/client";
	import SignInGoogle from "./buttons/GoogleSignIn.svelte";

	let loading = true;
	let isAuthenticated = false;

	async function logout() {
		await clientAuth.logout();
		isAuthenticated = false;
	}

	function navigateToDashboard() {
		window.location.assign("/dashboard");
	}

	onMount(async () => {
		isAuthenticated = await clientAuth.isAuthenticated();
		loading = false;
	});
</script>

{#if loading}
	carregando...
{:else if !isAuthenticated}
	<SignInGoogle />
{:else}
	<button on:click={navigateToDashboard}>Dashboard</button>
	<button on:click={logout}>Logout</button>
{/if}
