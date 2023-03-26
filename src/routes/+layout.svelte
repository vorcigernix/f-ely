<script>
	import '../app.postcss';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<div class="flex flex-col items-center min-h-screen">
	<Nav />
	<div class="flex flex-col flex-grow">
		<slot />
	</div>

	<Footer />
</div>
