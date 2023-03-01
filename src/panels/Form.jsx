import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createShortLink } from '../store/slice/linkSlice';

import { Panel, Div, Button, Group } from '@vkontakte/vkui';

const Form = () => {
	// Создаём диспетчер для взаимодействия с redux
	const dispatch = useDispatch();

	const {
		register,
		formState: { errors },
		handleSubmit,
		// reset,
	} = useForm({ mode: 'onSubmit' });

	// При отправке формы берём инпут url
	// и с помощью диспетчера вызываем асинхронный метод
	// и передаём введённый url
	const onSubmit = ({ url }) => {
		dispatch(createShortLink(url));
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
								// pattern: {
								// 	value: /(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
								// 	message:
								// 		'Пожалуйста, введите корректную ссылку',
								// },
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
