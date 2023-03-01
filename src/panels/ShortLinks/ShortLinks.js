import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLinks } from '../../store/slice/linkSlice';

import { Panel, Div, Cell, Button, Link, Text } from '@vkontakte/vkui';
import './ShortLinks.css';

const ShortLinks = () => {
	const [copiedUrl, setCopiedUrl] = useState(null);
	const links = useSelector(selectLinks);

	const copyToClipboard = (url) => {
		navigator.clipboard.writeText(url).then(() => {
			setCopiedUrl(url);
		});
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
