import { Flexbox } from 'shared/Layout';
import styled from 'styled-components';

import { theme } from 'theme';

interface StyledFlexBoxProps {}

export const StyledFlexBox = styled(Flexbox)<StyledFlexBoxProps>`
	flex-wrap: wrap;
	justify-content: center;
`;

StyledFlexBox.defaultProps = {
	theme,
};
