import {memo, useState} from 'react';
import PropTypes from 'prop-types';

import {Label, Container, Wrapper, Disclaimer} from '../TextField/styles';
import {CustomSelect, Chevron} from './styles';

const Select = ({id, label, onChange, onBlur, onFocus, error, sourceList}) => {
	const [fieldActive, setFieldActive] = useState(false);

	function activateField() {
		setFieldActive(true);
	}

	function handleBlur(e) {
		if (e.target.value === '') {
			setFieldActive(false);
		}
		onBlur(e);
	}

	function handleFocus(e) {
		setFieldActive(true);
		onFocus(e);
	}

	function handleChange(e) {
		activateField();
		onChange(e);
	}

	return (
		<Container $error={error}>
			<Wrapper>
				<Label htmlFor={id} data-testid="label-select" $active={fieldActive}>
					{label}
				</Label>
				<CustomSelect
					data-testid="select"
					name={id}
					id={id}
					onBlur={handleBlur}
					onFocus={handleFocus}
					onChange={handleChange}
					$active={fieldActive}
					$error={error}
				>
					<option value=""></option>
					{sourceList.map((source, index) => (
						<option key={index} value={source?.code || source}>
							{source?.name || source}
						</option>
					))}
				</CustomSelect>
				<Chevron
					className="fa fa-chevron-down"
					aria-hidden="true"
					$active={fieldActive}
				></Chevron>
			</Wrapper>
			{error && <Disclaimer>{error}</Disclaimer>}
		</Container>
	);
};

Select.defaultProps = {
	onBlur: () => {},
	onFocus: () => {},
	onChange: () => {},
	error: '',
	options: [],
};

Select.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	sourceList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			code: PropTypes.string,
		})
	),
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	error: PropTypes.string,
};

Select.id = 'select';

export default memo(Select);
