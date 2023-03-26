import { getAll } from "$lib/server/webnative";
import type { LayoutServerLoad } from "./$types";
import { formatISO } from "date-fns";
import type { Post } from "$lib/Post";

const token = import.meta.env.VITE_BLOCKEN_TOKEN;

async function getAllPosts() {
	const documents = await getAll(token);
	const wnposts = documents.sort((a, b) => b.updated - a.updated);

	const posts: Post[] = wnposts.map((apiObject) => ({
		slug: apiObject.cid,
		title: apiObject.post.header,

		date: formatISO(new Date(apiObject.updated)),
		coverImage: apiObject.image,
		author: apiObject.post.author || "anon",
		excerpt: apiObject.post.content,
		tags: apiObject.post.tags,
		ogImage: { url: apiObject.image },
		content: apiObject.post.content,
	}));
	//console.log(posts);
	return posts;
}

export const load = (async () => {
	return {
		posts: await getAllPosts(),
	};
}) satisfies LayoutServerLoad;
