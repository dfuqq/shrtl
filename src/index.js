import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

// Init VK  Mini App
bridge.send('VKWebAppInit');

ReactDOM.render(
	<Provider store={store}>
		<PersistGate
			persistor={persistor}
			loading={null}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
