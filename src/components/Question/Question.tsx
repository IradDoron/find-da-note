import { useRecoilValue } from 'recoil';

import { EqualSign } from 'shared/Shapes/EqualSign';

import { Arrow } from 'shared/Shapes/Arrow';

import {
	StyledCard as Card,
	StyledText as Text,
} from 'components/Question/styles';

import { MusicHelpers } from 'helpers';

import {
	directionState,
	intervalNumberState,
	startNoteState,
	userChoiceState,
} from 'store';

import { Flexbox } from 'shared/Layout';

export const Question = () => {
	const currentDirection = useRecoilValue(directionState);
	const currentStartNote = useRecoilValue(startNoteState);
	const intervalNumber = useRecoilValue(intervalNumberState);
	const userChoice = useRecoilValue(userChoiceState);

	return (
		<Flexbox
			direction="row"
			gap="20px"
			custom={{
				alignItems: 'center',
			}}
		>
			<Card
				mobileProps={{
					width: '40px',
				}}
				custom={{
					width: '60px',
				}}
			>
				<Text>{MusicHelpers.convertLatinNameToHebrew(currentStartNote)}</Text>
			</Card>
			<Arrow direction={currentDirection} />
			<Card
				mobileProps={{
					width: '80px',
				}}
				custom={{
					width: '100px',
				}}
			>
				<Text>{MusicHelpers.intervalNumberToWord(intervalNumber)}</Text>
			</Card>
			<EqualSign />
			<Card
				mobileProps={{
					width: '40px',
				}}
				custom={{
					width: '60px',
				}}
			>
				<Text>
					{userChoice ? MusicHelpers.convertLatinNameToHebrew(userChoice) : '?'}
				</Text>
			</Card>
		</Flexbox>
	);
};
