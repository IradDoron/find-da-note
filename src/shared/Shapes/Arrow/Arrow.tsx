import styled from 'styled-components';

import { ArrowBody } from 'shared/Shapes/Arrow/ArrowBody';
import { ArrowHead } from 'shared/Shapes/Arrow/ArrowHead';

import { Props } from 'shared/Shapes/Arrow/types';

const StyledArrowContainer = styled.div<Props>`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	transform: rotate(${(props) => (props.direction === 'up' ? '0' : '180')}deg);
`;

export const Arrow = ({ direction }: Props) => {
	return (
		<StyledArrowContainer direction={direction}>
			<ArrowHead />
			<ArrowBody />
		</StyledArrowContainer>
	);
};
