import React from 'react';

import { Panel } from '@vkontakte/vkui';

import Header from './Header';
import Form from './Form';

const Home = ({ id }) => {
	return (
		<Panel id={id}>
			<Header />
			<Form />
		</Panel>
	);
};

export default Home;
