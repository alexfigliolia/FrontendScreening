import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

export const Error: React.FC = () => {
	return (
		<>
			<Title>Ops...</Title>
			<Title level={2}>An error has occurred</Title>
		</>
	);
};
