import React from 'react';

import { Panel, Div, SimpleCell, Button } from '@vkontakte/vkui';

const ShortLinks = () => {
	const links = [];

	if (!links?.length) return null;

	return (
		<Panel>
			<Div>
				{links.map((item) => (
					<Div key={item.code}>
						<SimpleCell>{item.original_link}</SimpleCell>
						<SimpleCell>{item.full_short_link2}</SimpleCell>
						<Button size='m'>Скопировать</Button>
					</Div>
				))}
			</Div>
		</Panel>
	);
};

export default ShortLinks;
