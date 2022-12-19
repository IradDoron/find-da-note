import { useRecoilValue } from 'recoil';

import { StyledAppWrapper } from 'components/AppWrapper/styles';

import { themeModeState } from 'store';

import { Props } from 'components/AppWrapper/types';

export const AppWrapper = ({ children }: Props) => {
	const themeMode = useRecoilValue(themeModeState);
	return <StyledAppWrapper themeMode={themeMode}>{children}</StyledAppWrapper>;
};
