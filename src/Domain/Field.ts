export interface Dependencies {
	[fieldId: string]: (number | string | boolean)[];
}

export interface InputConfig {
	id: string;
	label: string;
	definition: string;
	dependencies?: Dependencies;
}
export interface InputText extends InputConfig {
	type: 'text' | 'number';
	mask?: string;
}

export interface InputCheckbox extends InputConfig {
	type: 'checkbox';
}
export interface InputSelect extends InputConfig {
	type: 'select';
	sourceList: string;
}

export type Field = InputText | InputCheckbox | InputSelect;
