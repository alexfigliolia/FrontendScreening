import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { Breadcrumb } from 'Components';

import * as Pages from 'Pages';
import { RouteNames } from './RouteNames';

import styles from './Routes.module.scss';

const { Header, Content, Footer } = Layout;

export const Routes: React.FC = () => {
	const {
		push,
		location: { pathname },
	} = useHistory();

	return (
		<Layout className="layout">
			<Header>
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" onClick={({ key }) => push(key.toString())} defaultSelectedKeys={[pathname]}>
					<Menu.Item key={RouteNames.home}>Home</Menu.Item>
					<Menu.Item key={RouteNames.form}>Dynamic Form</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: '0 50px' }}>
				<Breadcrumb />
				<div className="site-layout-content">
					<div className={styles.page}>
						<Switch>
							<Route path={RouteNames.home} exact component={Pages.HelloPage} />
							<Route path={RouteNames.form} component={Pages.FormPage} />
							<Route component={Pages.Page404} />
						</Switch>
					</div>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
		</Layout>
	);
};
