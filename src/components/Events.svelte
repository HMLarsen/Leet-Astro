<script lang="ts">
	import { onMount } from "svelte";
	import type { Event } from "../models/client/event.model";

	let events: Event[] = [];

	onMount(async () => {
		const response = await fetch("/api/events");
		events = await response.json();
	});
</script>

<h1>Eventos</h1>
<ul>
	{#each events as event}
		<li>{new Date(event.date).toLocaleDateString()}</li>
	{/each}
</ul>
