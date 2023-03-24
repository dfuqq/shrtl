import React, { useState } from 'react';
import { Panel, FormLayout, Calendar, Spacing, Button } from '@vkontakte/vkui';

const ModalPageContent = ({ setActiveModal }) => {
	const [value, setValue] = useState(() => new Date());
	const [expirationDate, setExpirationDate] = useState(() => new Date());

	const getExpirationDate = () => {
		const yyyy = value.getFullYear();
		let mm = value.getMonth() + 1; // Months start at 0!
		let dd = value.getDate();
		if (dd < 10) dd = '0' + dd;
		if (mm < 10) mm = '0' + mm;

		setExpirationDate(dd + '.' + mm + '.' + yyyy);
		setActiveModal(null);
	};

	return (
		<Panel centered>
			<FormLayout>
				<Calendar
					value={value}
					onChange={(value) => setValue(value)}
					disablePast
					disablePickers
					showNeighboringMonth
					size='m'
				/>
				<Spacing />
				<Button
					size='m'
					mode='overlay_primary'
					onClick={getExpirationDate}>
					Установить
				</Button>
			</FormLayout>
		</Panel>
	);
};

export default ModalPageContent;
