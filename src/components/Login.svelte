<script lang="ts">
	import type { User } from "firebase/auth";
	import { onMount } from "svelte";
	import clientAuth from "../auth/client";
	import SignInGoogle from "./buttons/GoogleSignIn.svelte";

	let loading = true;
	let user: User | null;

	async function logout() {
		await clientAuth.logout();
		user = null;
	}

	function navigateToDashboard() {
		window.location.assign("/dashboard");
	}

	onMount(async () => {
		user = await clientAuth.getUser();
		loading = false;
	});
</script>

{#if loading}
	carregando...
{:else if !user}
	<SignInGoogle />
{:else}
	<p>Olá, {user.displayName}</p>
	<button on:click={navigateToDashboard}>Dashboard</button>
	<br />
	<button on:click={logout}>Sair</button>
{/if}
