import React from 'react';
import { Field } from 'Domain/Field';
import { Form } from 'antd';

import { InputCheckBox } from './InputCheckBox';
import { InputSelect } from './InputSelect';
import { InputText } from './InputText';

interface Props {
	field: Field;
}

export const FormField: React.FC<Props> = ({ field }) => {
	let fieldType: JSX.Element;
	switch (field.type) {
		case 'checkbox':
			fieldType = <InputCheckBox field={field} />;
			break;
		case 'select':
			fieldType = <InputSelect field={field} />;
			break;
		default:
			fieldType = <InputText field={field} />;
			break;
	}
	if (field.dependencies) {
		return (
			<Form.Item dependencies={Object.keys(field.dependencies)} noStyle>
				{({ getFieldValue }) => {
					// it never happens, but the typescript doesn't recognize
					if (!field.dependencies) return null;
					for (const dependency of Object.keys(field.dependencies)) {
						const values = field.dependencies[dependency];
						const dependencyValue = getFieldValue(dependency);
						const valid = values.findIndex(value => {
							if (typeof value === 'boolean') return value === !!dependencyValue;
							if (typeof value === 'number') return value === Number(dependencyValue);
							return value === dependencyValue;
						});
						if (valid === -1) return null;
					}
					return fieldType;
				}}
			</Form.Item>
		);
	}
	return fieldType;
};
