import { error } from '@sveltejs/kit';

export async function load({ fetch, params, parent, setHeaders, locals }) {
	// const parent_data = await parent();
	// console.log(parent_data);
	// console.log('locals', locals);
	const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);
	const data = await res.json();

	if (data.message) {
		throw error(404, {
			message: data.message
		});
	}

	setHeaders({
		'Cache-Control': 'max-age=3600'
	});

	return {
		episode: data,
		user: locals.user
	};
}
