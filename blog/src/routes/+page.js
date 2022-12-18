export async function load({ fetch, parent }) {
	const parent_data = await parent();
	// console.log(parent_data);
	const res = await fetch('https://syntax.fm/api/shows/latest');
	const data = await res.json();
	// console.log('data', data);

	return {
		// hello: 'world'
		latest_episode: data
	};
}
