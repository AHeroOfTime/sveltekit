import { fail } from '@sveltejs/kit';

// POST request for route
export const actions = {
	default: async ({ locals, request }) => {
		if (!locals?.user?.roles?.includes('admin')) {
			return fail(401, {
				error_message: 'Un-authorized'
			});
		}
		// console.log('request', request);
		const data = await request.formData();
		// console.log('data', data);
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');

		console.log(name, email, message);

		return {
			message: 'Email sent!'
		};
	}
};
