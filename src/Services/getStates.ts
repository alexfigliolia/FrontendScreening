import { fetchAPI } from 'Utils/';

export const getStates = () => {
	return fetchAPI.get<string[]>('/states');
};
