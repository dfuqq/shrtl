import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectLinks,
	increaseCounterOnOpen,
} from '../../store/slice/linkSlice';

import { Panel, Div, Cell, Button, Link, Text } from '@vkontakte/vkui';
import './ShortLinks.css';

const ShortLinks = ({ go }) => {
	const [copiedUrl, setCopiedUrl] = useState(null);
	const links = useSelector(selectLinks);

	const dispatch = useDispatch();

	const copyToClipboard = (url) => {
		navigator.clipboard.writeText(url).then(() => {
			setCopiedUrl(url);
		});
	};

	const openLink = (item) => {
		let id = 0;
		for (let i = 0; i < links.length; i++) {
			if (links[i].code === item.code) {
				id = i;
				break;
			}
		}
		dispatch(increaseCounterOnOpen(id));
	};

	if (!links?.length) return null;

	return (
		<Panel>
			<Div>
				{links.map((item) => (
					<Div key={item.code}>
						<Cell
							description={
								<Text>
									{item.clickCounter} перехода
									<br />
									Действует до: {item.date_created}
								</Text>
							}
							indicator={item.original_link}
							disabled
							className='Cell'
							after={
								<Div>
									<Button
										mode={
											copiedUrl === item.full_short_link2
												? 'overlay_primary'
												: 'overlay_outline'
										}
										disabled={
											copiedUrl === item.full_short_link2
												? true
												: false
										}
										onClick={() =>
											copyToClipboard(
												item.full_short_link2
											)
										}>
										{copiedUrl === item.full_short_link2
											? 'Скопировано'
											: 'Скопировать'}
									</Button>
								</Div>
							}>
							<Link
								href={item.full_short_link2}
								target='_blank'
								// data-to='not_found'
								onClick={() => {
									openLink(item);
									// go(e);
								}}>
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
