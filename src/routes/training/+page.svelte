<script lang="ts">
	import type { Post } from '$lib/Post';
	export let data;
	const courses: Post[] = data.posts.filter((item: Post) => item.tags.includes('courses'));
	//console.log(courses);
</script>

<section>
	<div class=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
			<div class="w-full mx-auto">
				<h1>Nabídka konzultací a kurzů</h1>
				<h2>Začněte správně se včelařem Ondrou</h2>
				<p>
					Pravidelně pořádán včelařské kurzy a semináře, a to jak formou online webináře, tak i
					kurzy včelařské praxe na mé výukové včelnici v Jablonci nad Nisou. Kurzy pravidelně
					vypisuji na úvodní straně v aktualitách. Jsou vhodné pro úplné začátečníky, kteří o
					včelaření teprve uvažují, ale i pro mírně pokročilé, co už včely mají a chtěly by rozšířit
					své odborné znalosti a poskytnout svým včelám lepší péči. Narozdíl od jiných včelařů se
					ode mne na kurzu dozvíte, jak včely ošetřovat s použitím minima chemie a také jak o včely
					pečovat s minimálním narušením jejich původních přírodních principů.
				</p>
				<h2>Konzultace se včelařem Ondrou</h2>
				<p>
					Pro ty, kterým vyhovuje spíše individuální přístup, nabízím osobní vedení v začátcích
					včelaření. Forma už je čistě na domluvě, zpravidla je možné se domluvit a spojit přes
					online meeting nebo po mailu, kde nabízím službu "včelař na mailu" a během 1 roku vám budu
					odpovídat na všechny vaše dotazy po mailu. Je také možné se spojit jinak dle domluvy.
					Cena: 300 kč/hod za online meeting, 2500 kč na rok za službu včelaře na mailu.
				</p>
			</div>
		</div>
		<div
			class="flex flex-col items-center pb-10 mx-auto my-10 border p-4 rounded-lg border-lavblue-400 max-w-7xl sm:flex-row bg-lavblue-100/50"
		>
			<div
				class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full sm:mr-10"
			>
				<svg
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="w-10 h-10 mr-2 text-white bg-lavblue-300 rounded-full p-2"
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
			</div>
			<div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
				<h2>Včelař na mailu</h2>
				<p>
					S čímkoliv potřebujete pomoci, nebo máte pocit, že potřebujte konzultovat s dalším
					odborným názorem. Včelař Ondra vám rád odpoví a po celý roku bude k dispozici vašim
					dotazům.
				</p>
				<a
					href="mailto:vcelarstvimachek@seznam.cz?subject=Objedn%C3%A1vka%20-%20v%C4%8Dela%C5%99%20na%20emailu&body=Dobr%C3%BD%20den%2C%0D%0Az%C3%A1vazn%C4%9B%20t%C3%ADmto%20objedn%C3%A1v%C3%A1m%20slu%C5%BEbu%20v%C4%8Dela%C5%99%20na%20m%C3%ADru%20v%20cen%C4%9B%202500%20K%C4%8D.%0D%0ATelefonn%C3%AD%20kontakt%3A%0D%0A%0D%0AS%20pozdravem%2C%0D%0A%0D%0A"
					>Objednat</a
				>
			</div>
		</div>
		{#each courses as courseitem}
			<div
				class="flex flex-col items-center pb-10 mx-auto my-10 border p-4 rounded-lg border-lavblue-400 max-w-7xl sm:flex-row bg-lavblue-100/50"
			>
				<div
					class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full sm:mr-10"
				>
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="w-10 h-10 mr-2 text-white bg-lavblue-300 rounded-full p-2"
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
				</div>
				<div class="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
					<h2>{courseitem.title}</h2>
					{@html courseitem.content}
				</div>
			</div>
		{/each}
	</div>
</section>
