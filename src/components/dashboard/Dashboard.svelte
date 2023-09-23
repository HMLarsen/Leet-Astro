<script lang="ts">
	import type { User } from "firebase/auth";
	import { onMount } from "svelte";
	import clientAuth from "../../auth/client";
	import DashboardNav from "./DashboardNav.svelte";

	export let title: string;

	let loading = true;
	let user: User | null;

	onMount(async () => {
		user = await clientAuth.getUser();
		if (!user) window.location.assign("/");
		loading = false;
	});
</script>

{#if loading}
	carregando...
{:else if user}
	<div class="min-h-full bg-gray-100">
		<DashboardNav {user} />

		<header class="bg-white shadow">
			<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<h1 class="text-3xl font-bold tracking-tight text-gray-900">
					{title}
				</h1>
			</div>
		</header>
		<main>
			<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<slot />
			</div>
		</main>
	</div>
{/if}
