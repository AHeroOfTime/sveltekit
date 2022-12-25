export const actions = {
	default: async ({ locals, request }) => {
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
