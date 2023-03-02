// Хендлер формы с оригинальной ссылкой
// Используется ссылка для доступа к API сокращателя ссылок,
// а также redux для сохранения и обработки данных
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../api';

// Функция для работы формы по сокращению ссылок
// 'links/createShortLink' название асинхронного инструмента
// fetch получаем данные для обработки в extraReducers
export const createShortLink = createAsyncThunk(
	'links/createShortLink',
	async (url) => {
		const response = await fetch(API_BASE_URL + url, { method: 'POST' });
		return await response.json();
	}
);

const initialState = {
	items: [],
	loading: 'idle',
};

// extraReducers используем для асинхронной логики
const linkSlice = createSlice({
	name: 'links',
	initialState,
	extraReducers: {
		[createShortLink.rejected]: (state) => {
			state.loading = 'rejected';
		},
		[createShortLink.pending]: (state) => {
			state.loading = 'loading';
		},
		[createShortLink.fulfilled]: (state, action) => {
			// Два результаты ответа API:
			// ok = true/false, где true позволяет далее работать с результатом
			const { ok, result } = action.payload;

			if (ok) {
				// Если всё хорошо — забираем результат для парса,
				// продолжаем работу с сервисом
				state.items.push({
					code: result.code,
					original_link: result.original_link,
					full_short_link2: result.full_short_link2,
				});
				state.loading = 'idle';
			} else {
				// Если ok = false в ответе, то прекращаем работу
				state.loading = 'error';
			}
		},
	},
});

// Получение статуса загрузки
export const selectLoading = (state) => state.links.loading;

// Получение ссылок
export const selectLinks = (state) => state.links.items;

export default linkSlice.reducer;
