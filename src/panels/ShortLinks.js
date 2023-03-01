import React from 'react';
import { useSelector } from 'react-redux';
import { selectLinks } from '../store/slice/linkSlice';

import { Panel, Div, SimpleCell, Button } from '@vkontakte/vkui';

const ShortLinks = () => {
	const links = useSelector(selectLinks);

	if (!links?.length) return null;

	return (
		<Panel>
			<Div>
				{links.map((item) => (
					<Div key={item.code}>
						<SimpleCell
							indicator={item.full_short_link2}
							disabled>
							{item.original_link}
						</SimpleCell>

						<Button size='m'>Скопировать</Button>
					</Div>
				))}
			</Div>
		</Panel>
	);
};

export default ShortLinks;
