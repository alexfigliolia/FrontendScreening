import { Country } from 'Domain/';
import { fetchAPI } from 'Utils/';

export const getCountries = () => {
	return fetchAPI.get<Country[]>('/countries');
};
