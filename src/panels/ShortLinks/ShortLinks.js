import React from 'react';
import { useSelector } from 'react-redux';
import { selectLinks } from '../../store/slice/linkSlice';

import { Panel, Div, Cell, Button, Link, Text } from '@vkontakte/vkui';
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
							description={
								<Text>
									24 перехода
									<br />
									Действует до:
								</Text>
							}
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
