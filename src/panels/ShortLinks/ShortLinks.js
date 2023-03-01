import React from 'react';
import { useSelector } from 'react-redux';
import { selectLinks } from '../../store/slice/linkSlice';

import { Panel, Div, RichCell, Button, Link } from '@vkontakte/vkui';
import './ShortLinks.css';

const ShortLinks = () => {
	const links = useSelector(selectLinks);

	if (!links?.length) return null;

	return (
		<Panel>
			<Div>
				{links.map((item) => (
					<Div key={item.code}>
						<RichCell
							text='24'
							after={item.full_short_link2}
							disabled
							className='Cell'>
							<Link>{item.original_link}</Link>
						</RichCell>

						<Button size='m'>Скопировать</Button>
					</Div>
				))}
			</Div>
		</Panel>
	);
};

export default ShortLinks;
