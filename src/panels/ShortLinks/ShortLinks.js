import React from 'react';
import { useSelector } from 'react-redux';
import { selectLinks } from '../../store/slice/linkSlice';

import { Panel, Div, Cell, Button, Link } from '@vkontakte/vkui';
import { Icon12View } from '@vkontakte/icons';
import './ShortLinks.css';

const ShortLinks = () => {
	const links = useSelector(selectLinks);

	if (!links?.length) return null;

	return (
		<Panel>
			<Div>
				{links.map((item) => (
					<Div key={item.code}>
						<Cell
							description='24 перехода'
							indicator={item.original_link}
							disabled
							className='Cell'
							after={
								<Div>
									<Button mode='overlay_outline'>
										Скопировать
									</Button>
								</Div>
							}>
							<Link
								href={item.full_short_link2}
								target='_blank'>
								{item.full_short_link2}
							</Link>
						</Cell>
					</Div>
				))}
			</Div>
		</Panel>
	);
};

export default ShortLinks;
