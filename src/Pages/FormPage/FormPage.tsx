import React, { useMemo } from 'react';
import { Error, Loading, DynamicForm } from 'Components';
import { getForm } from 'Services';
import useSWR from 'swr';

import { Typography } from 'antd';

const { Title } = Typography;

export const FormPage: React.FC = () => {
	const formFields = useSWR('form', () => getForm());
	const form = useMemo(() => {
		if (formFields.data) {
			return <DynamicForm formFields={formFields.data} />;
		}
		return null;
	}, [formFields]);
	if (formFields.error) return <Error />;
	if (!formFields.error && !formFields.data) return <Loading />;
	return (
		<>
			<Title>Dynamic Form</Title>
			{form}
		</>
	);
};
