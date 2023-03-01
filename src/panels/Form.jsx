import React from 'react';

import { Panel, Div, FormItem, Input, Button, Group } from '@vkontakte/vkui';

const Form = () => {
	return (
		<Panel>
			<Div>
				<FormItem top='Ссылка'>
					<Group>
						<Input
							type='url'
							placeholder='Введите ссылку'
						/>
						<Div
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}>
							<Button size='m'>Сократить</Button>
						</Div>
					</Group>
				</FormItem>
			</Div>
		</Panel>
	);
};

export default Form;
