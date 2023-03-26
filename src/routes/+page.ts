import type { PageLoad } from "./$types";

export const load = (async ({ parent }) => {
	const { posts } = await parent();
	//console.log(posts);
	return { posts };
}) satisfies PageLoad;
