import React from 'react';
import { Typography } from 'antd';
const { Title, Paragraph, Text } = Typography;

export const HelloPage: React.FC = () => {
	return (
		<>
			<Title>Hi!</Title>
			<Title level={2}>This is an application created by Bruno Motta!</Title>
			<Paragraph>This page exists only so that our app has more than one page.</Paragraph>

			<Title level={3}>Instructions:</Title>
			<Paragraph>
				I installed the <Text code>json-server</Text> to simulate an endpoint, because what is the fun of making a dynamic form if I cannot
				retrieve it from a endpoint?
			</Paragraph>
			<Paragraph>
				The <Text code>GET /countries</Text> endpoint returns the list of countries
			</Paragraph>
			<Paragraph>
				The <Text code>GET /states</Text> endpoint returns the list of US states.
			</Paragraph>
			<Paragraph>
				The <Text code>GET /form</Text> endpoint returns the fields that will be used to build the dynamic form
			</Paragraph>

			<Title level={3}>
				Changes on <Text code>data.js</Text>:
			</Title>
			<Paragraph>
				The result of <Text code>data.js</Text> could not be sent as a JSON, so I made some minor changes to it:
			</Paragraph>
			<Paragraph>
				The <Text code>mask</Text> property comes from a string (which is the regex) that will be used for validation.
			</Paragraph>
			<Paragraph>
				The <Text code>dependencies</Text> property received an object and these objects were sometimes a function, in which case I had to
				change it to receive an array of <Text code>string</Text> or <Text code>boolean</Text> and validate that the value is contained in
				the array.
			</Paragraph>
			<Paragraph>
				But be careful, for it to work correctly, if the value is a <Text code>boolean</Text> I will check if the value is not falsifiable,
				for example <Text code>"" === false // true</Text> or <Text code>"same-string" === true // true</Text>
			</Paragraph>
			<Paragraph>
				I understand that this approach can lead to some problem in the future, and if this application was for production, this strategy
				would need to be reviewed.
			</Paragraph>
		</>
	);
};
