import React, { useState } from 'react';
import {
	View,
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
	ModalRoot,
	ModalPage,
	ModalPageHeader,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import NotFound from './panels/NotFound/NotFound';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [activeModal, setActiveModal] = useState('settings');

	const go = (e) => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const modal = (
		<ModalRoot activeModal={activeModal}>
			<ModalPage
				id='settings'
				settlingHeight={50}
				dynamicContentHeight
				header={<ModalPageHeader>Settings</ModalPageHeader>}
				onClose={() => setActiveModal(null)}>
				Hello
			</ModalPage>
		</ModalRoot>
	);

	return (
		<ConfigProvider appearance='dark'>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout modal={modal}>
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
