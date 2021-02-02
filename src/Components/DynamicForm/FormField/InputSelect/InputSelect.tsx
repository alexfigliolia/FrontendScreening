import { Form, Select } from 'antd';

import { Country, InputSelect as IInputSelect } from 'Domain';
import React from 'react';
import useSWR from 'swr';
import { fetchAPI } from 'Utils';

interface Props {
	field: IInputSelect;
}

type Response = Country | string;

export const InputSelect: React.FC<Props> = ({ field }) => {
	const apiOptions = useSWR<Response[]>(`/${field.sourceList}`, fetchAPI.get);
	const options = apiOptions.data?.map(o => (typeof o === 'string' ? { value: o, label: o } : { value: o.code, label: o.name })) || [];
	const required = true;
	const rules = [{ required, message: `${field.label} is required` }];
	return (
		<Form.Item id={field.id} name={field.id} label={field.label} tooltip={field.definition} rules={rules} required={required}>
			<Select placeholder={field.label}>
				{options.map(option => (
					<Select.Option key={option.value} value={option.value}>
						{option.label}
					</Select.Option>
				))}
			</Select>
		</Form.Item>
	);
};
