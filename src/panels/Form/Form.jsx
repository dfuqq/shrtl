import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createShortLink, selectLoading } from '../../store/slice/linkSlice';

import { Panel, Div, Button, Group } from '@vkontakte/vkui';
import { Icon24ClockOutline } from '@vkontakte/icons';

import ShortLinks from '../ShortLinks/ShortLinks';
import './Form.css';

const Form = ({ go, modalControl }) => {
	// Создаём диспетчер для взаимодействия с redux
	const dispatch = useDispatch();

	// Получаем статус выполнения запроса
	const loading = useSelector(selectLoading);

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({ mode: 'onSubmit' });

	// При отправке формы берём инпут url
	// и с помощью диспетчера вызываем асинхронный метод
	// и передаём введённый url
	const onSubmit = ({ url }) => {
		dispatch(createShortLink(url));
		reset();
	};

	return (
		<Panel>
			<Div>
				<Div>
					<Group>
						<form
							autoComplete='off'
							onSubmit={handleSubmit(onSubmit)}>
							<input
								type='url'
								placeholder='Введите ссылку'
								className='Input'
								{...register('url', {
									required: 'Пожалуйста, введите ссылку',
									// pattern: {
									// 	value: /(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
									// 	message:
									// 		'Пожалуйста, введите корректную ссылку',
									// },
								})}
								style={{
									outlineColor: errors.url
										? 'red'
										: 'currentcolor',
									outlineWidth: errors.url ? '4px' : '1px',
								}}
								// Закрываем возможность ввода
								// во время выполнения запроса
								disabled={loading === 'loading'}
							/>
							<Div
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								<Icon24ClockOutline
									style={{ padding: 10, cursor: 'pointer' }}
									onClick={modalControl}
								/>
								<Button
									size='m'
									disabled={loading === 'loading'}
									type='submit'>
									Сократить
								</Button>
							</Div>
							{errors.url && <Div>{errors.url.message}</Div>}
						</form>
					</Group>
				</Div>
			</Div>
			<ShortLinks go={go} />
		</Panel>
	);
};

export default Form;
