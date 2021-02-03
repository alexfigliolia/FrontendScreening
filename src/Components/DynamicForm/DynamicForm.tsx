import React, { useMemo, useState } from 'react';
import { Button, Form, Progress, Typography } from 'antd';
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
	const allRequiriedFields = useMemo(
		() =>
			Object.values(formFields)
				.flat()
				.filter(f => f.type === 'select' || f.hasOwnProperty('mask')),
		[formFields],
	);
	const allRequiriedIds = useMemo(() => allRequiriedFields.map(({ id }) => id), [allRequiriedFields]);
	const [complete, setComplete] = useState({ done: 0, all: allRequiriedFields.filter(f => !f.dependencies).length });

	return (
		<Form
			form={form}
			onFinish={formData => {
				fetchAPI
					.post('/form', formData)
					.then(() => {
						alert('Congratulations!');
						form.resetFields();
						setComplete({ done: 0, all: allRequiriedFields.filter(f => !f.dependencies).length });
					})
					.catch();
			}}
			onFieldsChange={(changed, allFields) => {
				const requiriedFields = allFields.filter(f => allRequiriedIds.includes(f.name.toString()));
				const all = requiriedFields.length;
				const done = requiriedFields.filter(f => f.touched && (!f.errors || f.errors.length === 0)).length;
				setComplete({ all, done });
			}}
			layout="vertical"
			requiredMark={true}>
			<div>
				{complete.done}/{complete.all}
				<Progress percent={(complete.done * 100) / complete.all} status="active" />
			</div>

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
