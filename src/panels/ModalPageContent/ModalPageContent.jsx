import React, { useState } from 'react';
import { Panel, FormLayout, Calendar } from '@vkontakte/vkui';

const ModalPageContent = () => {
	const [value, setValue] = useState(() => new Date());

	return (
		<Panel centered>
			<FormLayout>
				<Calendar
					value={value}
					onChange={setValue}
					disablePast
					disablePickers
					showNeighboringMonth
					size='m'
				/>
			</FormLayout>
		</Panel>
	);
};

export default ModalPageContent;
