import {memo} from 'react';

import {
	Label,
	CheckboxContainer,
	HiddenCheckbox,
	StyledCheckbox,
	Icon,
	LabelSpan,
} from './styles';

const Checkbox = ({className, checked, label, id, ...props}) => (
	<Label>
		<CheckboxContainer className={className}>
			<HiddenCheckbox checked={checked} {...props} />
			<StyledCheckbox checked={checked}>
				<Icon viewBox="0 0 24 24">
					<polyline points="20 6 9 17 4 12" />
				</Icon>
			</StyledCheckbox>
		</CheckboxContainer>
		<LabelSpan>{label}</LabelSpan>
	</Label>
);

Checkbox.id = 'checkbox';

export default memo(Checkbox);
