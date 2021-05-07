import {useEffect, useState} from 'react';

import {TextField, Select, Checkbox} from 'components';

import styled from 'styled-components';

const formData = require('utils/data');

const Container = styled.div`
	background-color: ${({theme}) => theme.colors.primary.gray};
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
`;

const Form = styled.form`
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0px 5px 20px #c1b4b4;
	padding: 25px;
	width: 500px;
	height: 90%;
	overflow: auto;
`;

function App() {
	const [values, setValues] = useState({});
	const [data, setData] = useState([]);
	const fields = [TextField, Select, Checkbox];

	useEffect(() => {
		const sections = Object.keys(formData);
		setData(
			sections.map((sectionName, index) => ({
				sectionName,
				fields: formData[sections[index]],
			}))
		);
	}, []);

	const handleChange = (e) => {
		setValues({...values, [e.target.id]: e.target.value});
		console.log('values', values);
	};

	const Field = ({sourceField, ...rest}) => {
		const CurrentField =
			fields.find((field) => field.type.id === sourceField.type) || TextField;
		return (
			<CurrentField
				key={sourceField.id}
				onChange={handleChange}
				value={values[sourceField.id]}
				{...rest}
			/>
		);
	};

	return (
		<Container>
			<Form>
				{data.map((current) => (
					<>
						<h1>{current?.sectionName}</h1>
						{current.fields.map((sourceField) => (
							<Field key={sourceField.id} sourceField={sourceField} {...sourceField} />
						))}
					</>
				))}
			</Form>
		</Container>
	);
}

export default App;
