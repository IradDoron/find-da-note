import { useState } from 'react';

import { useNextQuestion, useUpdateStatus } from 'components/NextButton/hooks';

import { StyledButton, StyledText } from 'components/NextButton/styles';

export const NextButton = () => {
	const [status, setStatus] = useState('disabled');
	const nextQuestion = useNextQuestion(status);

	useUpdateStatus(setStatus);

	return (
		<StyledButton
			onClick={nextQuestion}
			isDisabled={status === 'disabled'}
			custom={{
				width: '68px',
			}}
		>
			<StyledText>הבא</StyledText>
		</StyledButton>
	);
};
