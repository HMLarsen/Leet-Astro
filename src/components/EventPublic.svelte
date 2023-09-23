<script lang="ts">
	import type { Event } from "../models/client/event.model";

	export let event: Event;
</script>

<img src={"data:image/*;base64," + event.bannerBase64} alt="evento banner" />
<h1>{event.name}</h1>
<h2>{event.description}</h2>
<h3>{event.date.toLocaleString()}</h3>
