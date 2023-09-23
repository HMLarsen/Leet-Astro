<script lang="ts">
	import type { User } from "firebase/auth";
	import { fade } from "svelte/transition";
	import clientAuth from "../../auth/client";

	export let user: User;

	let pathname = location.pathname;
	console.log(pathname);

	async function logout() {
		await clientAuth.logout();
		window.location.assign("/");
	}

	let menuUserOpen = false;
	const links = [
		{ url: "/dashboard/eventos", name: "Meus eventos" },
		{ url: "/dashboard/eventos/novo", name: "Novo evento" },
	];
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<img class="h-8 w-8" src="/favicon.ico" alt="Leet logo" />
				</div>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						{#each links as { url, name }}
							<a
								href={url}
								class="{pathname === url
									? 'bg-gray-900 text-white'
									: 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium"
								aria-current="page">{name}</a
							>
						{/each}
					</div>
				</div>
			</div>
			<div class="hidden md:block">
				<div class="ml-4 flex items-center md:ml-6">
					<span class="text-white">{user.displayName}</span>

					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								on:click={() => (menuUserOpen = !menuUserOpen)}
								type="button"
								class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="absolute -inset-1.5" />
								<span class="sr-only">Abrir menu usuário</span>
								<img
									class="h-8 w-8 rounded-full"
									src={user.photoURL}
									alt="foto usuário"
								/>
							</button>
						</div>

						{#if menuUserOpen}
							<div
								transition:fade={{ duration: 100 }}
								class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<a
									href="#sair"
									on:click={logout}
									class="{menuUserOpen ?? 'bg-gray-100' }' block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-2">Sair</a
								>
							</div>
						{/if}
					</div>
				</div>
			</div>
			<div class="-mr-2 flex md:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="absolute -inset-0.5" />
					<span class="sr-only">Open main menu</span>
					<!-- Menu open: "hidden", Menu closed: "block" -->
					<svg
						class="block h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!-- Menu open: "block", Menu closed: "hidden" -->
					<svg
						class="hidden h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="md:hidden" id="mobile-menu">
		<div class="space-y-1 px-2 py-2 sm:px-3">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<a
				href="/dashboard/eventos"
				class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
				aria-current="page">Meus eventos</a
			>
			<a
				href="/dashboard/eventos/novo"
				class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
				>Novo evento</a
			>
		</div>
		<div class="border-t border-gray-700 py-3">
			<div class="flex items-center px-5">
				<div class="flex-shrink-0">
					<img
						class="h-10 w-10 rounded-full"
						src={user.photoURL}
						alt="foto usuário"
					/>
				</div>
				<div class="ml-3">
					<div class="text-base font-medium leading-none text-white">
						{user.displayName}
					</div>
					<div
						class="text-sm font-medium leading-none text-gray-400 mt-1"
					>
						{user.email}
					</div>
				</div>
				<div class="ml-auto">
					<button
						on:click={logout}
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
						>Sair</button
					>
				</div>
			</div>
		</div>
	</div>
</nav>
