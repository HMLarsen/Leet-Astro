<script lang="ts">
	import { onMount } from "svelte";
	import clientAuth from "../auth/client";
	import type { Event } from "../models/client/event.model";

	let loading = true;
	let events: Event[] = [];

	onMount(async () => {
		const response = await clientAuth.makeRequest("/api/events");
		events = await response.json();
		loading = false;
	});
</script>

{#if loading}
	carregando...
{:else}
	<ul>
		{#each events as event}
			<li>{new Date(event.date).toLocaleDateString()}</li>
		{/each}
	</ul>
{/if}
