import { Form, Input } from 'antd';
import { InputText as IInputText } from 'Domain';
import React from 'react';

interface Props {
	field: IInputText;
}

export const InputText: React.FC<Props> = ({ field }) => {
	const required = !!field.mask;
	const rules = field.mask
		? [
				{ required, message: `${field.label} is required` },
				{ pattern: new RegExp(field.mask), message: 'Invalid value!' },
		  ]
		: undefined;
	return (
		<Form.Item id={field.id} name={field.id} label={field.label} tooltip={field.definition} rules={rules} required={required}>
			<Input placeholder={field.label} type={field.type} />
		</Form.Item>
	);
};
