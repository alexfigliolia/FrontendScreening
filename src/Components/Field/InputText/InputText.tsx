import { Form, Input } from 'antd';
import React from 'react';

interface Props {}

export const InputText: React.FC<Props> = () => {
	return (
		<Form.Item
			label="Field A"
			required
			tooltip="This is a required field"
			data-cy="field-email-login"
			name="email"
			colon={false}
			rules={[
				{ required: true, message: 'Informe seu email!' },
				{ type: 'email', message: 'Por favor, digite um e-mail válido!' },
			]}>
			<Input placeholder="input placeholder" />
		</Form.Item>
	);
};
