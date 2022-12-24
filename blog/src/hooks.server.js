import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth';

// runs 1st, sequence
async function logger({ event, resolve }) {
	const start_time = Date.now();
	// console.log('start_time', start_time);
	// wait on response, run other hooks and load
	const response = await resolve(event);

	console.log(`${Date.now() - start_time}ms ${event.request.method} ${event.url.pathname}`);
	return response;
}

// runs second, sequence
function authorize({ event, resolve }) {
	console.log('hi');
	const user = auth();
	event.locals.user = user;
	return resolve(event);
}

// export async function handle({ event, resolve }) {
// 	// event.locals.this_is_just_a_test = 'test';
// 	// event.cookies.set('test', 'test');
// 	// console.log('event', event);
// 	return resolve(event);
// }

export const handle = sequence(logger, authorize);

// intercepting fetch, step in and augment fetch request
// export function handleFetch({ request, fetch }) {
// 	return fetch(request);
// }

// allows you to intercept errors
export function handleError({ error, event }) {
	// logger(error, event)
	return {
		message: 'Oops, im intercepting in a hook',
		code: error.code
	};
}
