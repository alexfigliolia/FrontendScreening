const request = async <T>(method: string, uri: string, variables?: object): Promise<T> => {
	const headers = { 'Content-Type': 'application/json' };
	const prefix = process.env.REACT_APP_API || '';
	const body = variables ? JSON.stringify({ variables }) : undefined;

	const result = await fetch(`${prefix}${uri}`, { method, headers, body }).then(response => {
		if (response.status > 299) {
			throw Error(`status: ${response.status}`);
		}
		return response.json();
	});

	return result;
};

const get = async <T>(uri: string, params?: { [key: string]: string | number }) => {
	let url = uri;
	if (params) {
		const queryString = Object.keys(params)
			.map(key => key + '=' + params[key])
			.join('&');

		url = `${uri}?${queryString}`;
	}
	return request<T>('GET', url);
};

const post = async <T>(uri: string, body: object, params?: { [key: string]: string | number }) => {
	let url = uri;
	if (params) {
		const queryString = Object.keys(params)
			.map(key => key + '=' + params[key])
			.join('&');

		url = `${uri}?${queryString}`;
	}
	return request<T>('POST', url, body);
};

export const fetchAPI = { get, post };
