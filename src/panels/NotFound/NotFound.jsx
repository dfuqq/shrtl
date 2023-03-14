import React from 'react';

import { Panel, Div, Button } from '@vkontakte/vkui';

const NotFound = ({ go }) => {
	return (
		<Panel
			centered
			style={{
				background: 'rgb(255,0,0)',
				background:
					'linear-gradient(157deg, rgba(255,0,0,1) 0%, rgba(121,16,9,1) 45%, rgba(0,0,0,1) 100%)',
			}}>
			<Div>Hello!</Div>
			<Button
				size='l'
				mode='overlay_primary'
				onClick={go}
				data-to='home'>
				Вернуться назад
			</Button>
		</Panel>
	);
};

export default NotFound;
