import React, { useState } from 'react';

import { Panel, Div, FormItem, Input, Button, Group } from '@vkontakte/vkui';

const Form = () => {
	const [url, setUrl] = useState('');

	const onChange = (e) => setUrl(e.currentTarget.value);

	return (
		<Panel>
			<Div>
				<Group>
					<FormItem
						top='Ссылка'
						status={url ? 'valid' : 'error'}
						bottom={
							url
								? 'Сейчас сократим...'
								: 'Пожалуйста, введите ссылку'
						}>
						<Input
							type='url'
							placeholder='Введите ссылку'
							name='url'
							value={url}
							onChange={onChange}
						/>
					</FormItem>
					<Div
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}>
						<Button size='m'>Сократить</Button>
					</Div>
				</Group>
			</Div>
		</Panel>
	);
};

export default Form;
