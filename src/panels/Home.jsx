import React from 'react';

import { Panel } from '@vkontakte/vkui';

import Header from './Header';
import Form from './Form/Form';

const Home = ({ id, go, modalControl }) => {
	return (
		<Panel id={id}>
			<Header />
			<Form
				go={go}
				modalControl={modalControl}
			/>
		</Panel>
	);
};

export default Home;
