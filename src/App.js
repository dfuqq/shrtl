import React, { useState } from 'react';
import {
	View,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import NotFound from './panels/NotFound/NotFound';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');

	const go = (e) => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider appearance='dark'>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home
									id='home'
									go={go}
								/>
								<NotFound
									id='not_found'
									go={go}
								/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
};

export default App;
