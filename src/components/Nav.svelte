<script>
	let open = false;
</script>

<div class="w-full md:max-w-7xl mb-4">
	<div
		class="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row p-2 my-2  rounded-full"
	>
		<div class="flex flex-row items-center justify-between lg:justify-start">
			<svg
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				class="w-8 h-8 mr-2 text-white bg-hurricane-600 rounded-full p-2 "
				><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><g id="SVGRepo_iconCarrier"
					><path
						class="cls-1"
						d="M16.5,22a1,1,0,0,1-.5-.13l-1.38-.8a1,1,0,0,1,1-1.73l.88.51,3.5-2v-4l-3.5-2-3.5,2V18a1,1,0,0,1-2,0v-4.8a1,1,0,0,1,.5-.87L16,9.74a1,1,0,0,1,1,0l4.5,2.6a1,1,0,0,1,.5.87V18.4a1,1,0,0,1-.5.87L17,21.87A1,1,0,0,1,16.5,22Z"
					/><path
						class="cls-1"
						d="M7.5,22a1,1,0,0,1-.5-.13l-4.5-2.6A1,1,0,0,1,2,18.4V13.21a1,1,0,0,1,.5-.87L7,9.74a1,1,0,0,1,1,0l4.5,2.6a1,1,0,1,1-1,1.73l-4-2.31-3.5,2v4l3.5,2,4-2.31a1,1,0,0,1,1.37.36,1,1,0,0,1-.37,1.37L8,21.87A1,1,0,0,1,7.5,22Z"
					/><path
						class="cls-1"
						d="M16.5,11.6a1,1,0,0,1-1-1V6L12,4,8.5,6V10.6a1,1,0,1,1-2,0V5.41A1,1,0,0,1,7,4.54l4.5-2.6a1,1,0,0,1,1,0L17,4.54a1,1,0,0,1,.5.87V10.6A1,1,0,0,1,16.5,11.6Z"
					/></g
				></svg
			>
			<a
				href="/"
				class="text-lg font-bold tracking-tighter text-tuatara-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
			>
				Včelař Ondra
			</a>
			<button
				class="rounded-lg md:hidden focus:outline-none focus:shadow-outline text-tuatara-600"
				on:click={() => (open = !open)}
			>
				{#if open}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
						/>
					</svg>
				{/if}
			</button>
		</div>

		<nav
			class="flex-col flex-grow md:flex mt-4 md:justify-end md:flex-row {open ? 'flex' : 'hidden'}"
		>
			<ul
				class="space-y-2 md:space-y-0 list-none lg:space-y-0 lg:items-center md:inline-flex font-bold"
			>
				<li>
					<a
						href="/offer"
						class="px-2 lg:px-6 py-6 text-sm leading-[22px] md:px-3 text-tuatara-600 hover:text-gray-800"
					>
						Co nabízím
					</a>
				</li>
				<li>
					<a
						href="/contact"
						class="px-2 lg:px-6 py-6 text-sm leading-[22px] md:px-3 text-tuatara-600 hover:text-gray-800 "
					>
						Kontakt
					</a>
				</li>
				<li>
					<a
						href="/about"
						class="px-2 lg:px-6 py-6 text-sm leading-[22px] md:px-3 text-tuatara-600 hover:text-gray-800"
					>
						O mě
					</a>
				</li>
			</ul>
		</nav>
	</div>
</div>
