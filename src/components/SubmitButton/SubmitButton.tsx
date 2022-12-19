import { useState } from 'react';

import {
	StyledButton as Button,
	StyledText as Text,
} from 'components/SubmitButton/styles';

import { useHandleClick, useSetDisabled } from 'components/SubmitButton/hooks';

export const SubmitButton = () => {
	const [isDisabled, setIsDisabled] = useState(false);
	const handleClick = useHandleClick(isDisabled, setIsDisabled);

	useSetDisabled(setIsDisabled);

	return (
		<Button
			onClick={() => handleClick()}
			isDisabled={isDisabled}
			custom={{
				width: '68px',
			}}
		>
			<Text>בחר</Text>
		</Button>
	);
};
