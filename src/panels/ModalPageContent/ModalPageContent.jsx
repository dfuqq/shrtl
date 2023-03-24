import React from 'react';
import { Panel, FormLayout, Calendar, Spacing, Button } from '@vkontakte/vkui';

const ModalPageContent = ({
	setActiveModal,
	expirationDate,
	setExpirationDate,
}) => {
	return (
		<Panel centered>
			<FormLayout>
				<Calendar
					value={expirationDate}
					onChange={(value) => {
						setExpirationDate(value);
						console.log(value);
					}}
					disablePast
					disablePickers
					showNeighboringMonth
					size='m'
				/>
				<Spacing />
				<Button
					size='m'
					mode='overlay_primary'
					onClick={() => setActiveModal(null)}>
					Установить
				</Button>
			</FormLayout>
		</Panel>
	);
};

export default ModalPageContent;
