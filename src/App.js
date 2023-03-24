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
	Div,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import NotFound from './panels/NotFound/NotFound';
import ModalPageContent from './panels/ModalPageContent/ModalPageContent';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [activeModal, setActiveModal] = useState(null);

	const go = (e) => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const modalControl = () => {
		activeModal === null
			? setActiveModal('settings')
			: setActiveModal(null);
	};

	const modal = (
		<ModalRoot activeModal={activeModal}>
			<ModalPage
				id='settings'
				settlingHeight={50}
				dynamicContentHeight
				header={<ModalPageHeader>Дата истечения</ModalPageHeader>}
				onClose={() => setActiveModal(null)}>
				<Div>
					<ModalPageContent setActiveModal={setActiveModal} />
				</Div>
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
									modalControl={modalControl}
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
