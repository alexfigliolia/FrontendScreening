import React from 'react';
import { useHistory } from 'react-router-dom';
import { Breadcrumb as BreadcrumbANTD } from 'antd';

export const Breadcrumb: React.FC = () => {
	const {
		location: { pathname },
	} = useHistory();
	return (
		<BreadcrumbANTD style={{ margin: '16px 0' }}>
			<BreadcrumbANTD.Item>Home</BreadcrumbANTD.Item>
			{pathname
				.split('/')
				.filter(i => !!i)
				.map((p, key) => (
					<BreadcrumbANTD.Item key={`${p}-${key}`}>{p}</BreadcrumbANTD.Item>
				))}
		</BreadcrumbANTD>
	);
};
