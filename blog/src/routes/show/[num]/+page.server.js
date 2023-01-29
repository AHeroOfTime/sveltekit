import { error, redirect } from '@sveltejs/kit';
// import { env } from '$env/dynamic/private';
// console.log('env', env);

import { LUT_API } from '$env/static/private';
console.log('LUT_API', LUT_API);

export async function load({ fetch, params, parent, setHeaders, locals }) {
	// handling redirects
	if (!locals?.user?.id) throw redirect(307, '/');

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
