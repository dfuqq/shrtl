import React from 'react';
import { useForm } from 'react-hook-form';

import { Panel, Div, Button, Group } from '@vkontakte/vkui';

const Form = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		// reset,
	} = useForm({ mode: 'onSubmit' });

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Panel>
			<Div>
				<Group>
					<form
						autoComplete='off'
						onSubmit={handleSubmit(onSubmit)}>
						<input
							type='url'
							placeholder='Введите ссылку'
							{...register('url', {
								required: 'Пожалуйста, введите ссылку',
								pattern: {
									value: /(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
									message:
										'Пожалуйста, введите корректную ссылку',
								},
							})}
						/>
					</form>
					<Div
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}>
						<Button size='m'>Сократить</Button>
					</Div>
					{errors.url && <Div>{errors.url.message}</Div>}
				</Group>
			</Div>
		</Panel>
	);
};

export default Form;
