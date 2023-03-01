import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import linkReducer from './slice/linkSlice';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({ links: linkReducer });

// Reducer для промежуточного сохранения store
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: {
		links: linkReducer,
		// Надстройка для избежания ошибок со стороны toolkit
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER,
					],
				},
			}),
	},
});

// persistor — промежуточная оболочка для того, чтобы
// использовать дополнительный провайдер
export const persistor = persistStore(store);
