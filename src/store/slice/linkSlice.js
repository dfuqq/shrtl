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

export const increaseCounterOnOpen = createAsyncThunk(
	'links/increaseCounterOnOpen',
	async (itemId) => {
		try {
			return await { ok: true, result: { itemId: itemId } };
		} catch (error) {
			return await { ok: false, result: error };
		}
	}
);

const initialState = {
	items: [],
	loading: 'idle',
};

// extraReducers используем для асинхронной логики при получении промисов
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
					date_created: new Date().toLocaleString().split(',')[0],
					counter: 0,
				});
				state.loading = 'idle';
			} else {
				// Если ok = false в ответе, то прекращаем работу
				state.loading = 'error';
			}
		},
		[increaseCounterOnOpen.rejected]: (state) => {
			state.loading = 'rejected';
		},
		[increaseCounterOnOpen.pending]: (state) => {
			state.loading = 'loading';
		},
		[increaseCounterOnOpen.fulfilled]: (state, action) => {
			const { ok, result } = action.payload;
			if (ok) {
				state.items[result.itemId].counter++;
				state.loading = 'idle';
			} else {
				console.log(result.error);
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
