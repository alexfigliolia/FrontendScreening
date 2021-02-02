import { Field } from './Field';

export interface Form {
	[section: string]: Field[];
}
