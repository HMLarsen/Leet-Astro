import svelte from "@astrojs/svelte";
import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	adapter: node({
		mode: "standalone"
	}),
	integrations: [svelte()],
	redirects: {
		"/dashboard": "/dashboard/eventos"
	}
});