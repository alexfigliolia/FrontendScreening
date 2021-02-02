import { Form } from 'Domain/';
import { fetchAPI } from 'Utils/';

export const getForm = () => {
	return fetchAPI.get<Form>('/from');
};
