import styled, { keyframes } from 'styled-components';

import { Props } from 'shared/Background/FallingStars/types';

const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	background-size: 20px 20px;
`;

const fallingStar = keyframes`
  0% {
    top: -10px;
    left: -10px;
    width: 20px;
    height: 20px;
    opacity: 1;
  }
  100% {
    top: 100%;
    left: calc(100% - 10px);
    width: 0;
    height: 0;
    opacity: 0;
  }
`;

const Star = styled.div`
	position: absolute;
	top: -10px;
	left: -10px;
	width: 20px;
	height: 20px;
	z-index: 0;
	background: #dfcdcd;
	border-radius: 50%;
	animation: ${fallingStar} 7s infinite;
`;

export const FallingStars = ({ children }: Props) => {
	return (
		<Container>
			<Star />
			{children}
		</Container>
	);
};
