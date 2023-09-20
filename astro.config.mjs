import svelte from "@astrojs/svelte";
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	adapter: netlify(),
	integrations: [svelte()],
	redirects: {
		"/dashboard": "/dashboard/eventos"
	}
});