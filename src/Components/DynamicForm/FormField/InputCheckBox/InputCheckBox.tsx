import { Form, Checkbox } from 'antd';
import { InputCheckbox as IInputCheckbox } from 'Domain';
import React from 'react';

interface Props {
	field: IInputCheckbox;
}

export const InputCheckBox: React.FC<Props> = ({ field }) => {
	return (
		<Form.Item id={field.id} name={field.id} label={field.label} tooltip={field.definition} valuePropName="checked">
			<Checkbox />
		</Form.Item>
	);
};
