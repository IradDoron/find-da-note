import styled from 'styled-components';

// import constants
import KEYS_SIZES from '../../../constants/KEYS_SIZES';

const WhiteKeyContainer = styled.div`
	background-color: ${(props) => props.color};
	height: 100px;
	box-shadow: inset 0 0 2px #000;
	border-radius: ${({ theme }) => theme.border.getRadius('sm')};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	flex-shrink: 0;

	${({ theme }) => theme.breakpoints.down('sm')} {
		width: ${KEYS_SIZES.WHITE.WIDTH * KEYS_SIZES.RATIO.XS}px;
		height: ${KEYS_SIZES.WHITE.HEIGHT * KEYS_SIZES.RATIO.XS}px;
	}

	${({ theme }) => theme.breakpoints.up('sm')} {
		width: ${KEYS_SIZES.WHITE.WIDTH * KEYS_SIZES.RATIO.SM}px;
		height: ${KEYS_SIZES.WHITE.HEIGHT * KEYS_SIZES.RATIO.SM}px;
	}
`;

export default WhiteKeyContainer;
