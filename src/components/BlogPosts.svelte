<script lang="ts">
	import type { Post } from '$lib/Post';
	export let data;
	const news: Post[] = data.posts.filter((item: Post) => item.tags.includes('news'));
	//console.log(news);
</script>

<section class="text-gray-600 body-font p-2">
	<div class="container py-24 mx-auto">
		<div class="flex flex-wrap justify-center space-y-8 lg:space-y-0">
			{#each news as newsitem}
				<div class="lg:p-4 lg:w-1/3">
					<div class="h-full bg-white/70 rounded-lg overflow-hidden">
						<img
							class="lg:h-48 md:h-36 w-full object-cover object-center"
							src={newsitem.coverImage}
							alt={newsitem.title}
						/>
						<div class="p-6">
							<h2
								class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase"
							>
								NOVINKY
							</h2>
							<h1 class="title-font text-lg font-medium text-gray-900 mb-3">{newsitem.title}</h1>
							<p class="leading-relaxed mb-3 md:h-32 overflow-y-auto">
								{@html newsitem.excerpt}
							</p>
						</div>
					</div>
					<div class=" items-center flex-wrap mt-4 hidden">
						<button
							class="flex items-center px-10 py-2 text-base font-medium text-center text-lavblue-500 transition duration-500 ease-in-out transform border-2 border-lavblue-100 hover:border-lavblue-400 shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lavblue-500 bg-lavblue-100 hover:bg-lavblue-200"
							>Číst
							<svg
								class="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14" />
								<path d="M12 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
