import React from 'react';
import { Button, Form, Typography } from 'antd';
import { FormField } from './FormField';
import { Form as FormData } from 'Domain';
import { map } from 'lodash';
import { fetchAPI } from 'Utils';

const { Title } = Typography;

interface Props {
	formFields: FormData;
}
export const DynamicForm: React.FC<Props> = ({ formFields }) => {
	const [form] = Form.useForm();

	return (
		<Form
			form={form}
			onFinish={formData => {
				fetchAPI
					.post('/form', formData)
					.then(() => {
						alert('Congratulations!');
						form.resetFields();
					})
					.catch();
			}}
			layout="vertical"
			requiredMark={true}>
			{map(formFields, (fields, section) => {
				return (
					<fieldset key={section}>
						<Title level={2}>{section}</Title>
						{fields.map(field => (
							<FormField key={field.id} field={field} />
						))}
					</fieldset>
				);
			})}
			<Form.Item>
				<Button htmlType="submit" type="primary">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
