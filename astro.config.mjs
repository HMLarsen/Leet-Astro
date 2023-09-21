import netlify from "@astrojs/netlify/functions";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	adapter: netlify(),
	integrations: [svelte(), tailwind()],
	redirects: {
		"/dashboard": "/dashboard/eventos"
	},
	vite: {
		ssr: {
			noExternal: ['path-to-regexp']
		}
	}
});