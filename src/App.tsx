import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import {
	AppWrapper,
	Keyboard,
	NextButton,
	NotesButtons,
	Question,
	SubmitButton,
} from 'components';

import { Flexbox } from 'shared/Layout';

import { MusicHelpers } from 'helpers';

import { keyboardDataState } from 'store';

export const App = () => {
	const setKeyboardData = useSetRecoilState(keyboardDataState);

	useEffect(() => {
		setKeyboardData(MusicHelpers.getKeyboardData('C3', 'C5'));
	}, [setKeyboardData]);

	return (
		<AppWrapper>
			<Keyboard />
			<Question />
			<NotesButtons />
			<Flexbox
				direction="row"
				gap="20px"
				custom={{
					height: '48px',
				}}
			>
				<SubmitButton />
				<NextButton />
			</Flexbox>
		</AppWrapper>
	);
};
