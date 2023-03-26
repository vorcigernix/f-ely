<script>
	import Hero from '../components/Hero.svelte';
	import BlogPosts from '../components/BlogPosts.svelte';
	export let data;
</script>

<Hero />
<BlogPosts {data} />
