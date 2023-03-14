import React from 'react';

import { Panel } from '@vkontakte/vkui';

import Header from './Header';
import Form from './Form/Form';

const Home = ({ id, go }) => {
	return (
		<Panel id={id}>
			<Header />
			<Form go={go} />
		</Panel>
	);
};

export default Home;
