import styled from 'styled-components';

// import constants
import KEYS_SIZES from '../../../constants/KEYS_SIZES';

const BlackKeyContainer = styled.div`
	background-color: ${(props) => props.color};

	z-index: 1;
	border-radius: ${({ theme }) => theme.border.getRadius('sm')};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: #fff;
	flex-shrink: 0;

	${({ theme }) => theme.breakpoints.down('sm')} {
		width: ${KEYS_SIZES.BLACK.WIDTH * KEYS_SIZES.RATIO.XS}px;
		height: ${KEYS_SIZES.BLACK.HEIGHT * KEYS_SIZES.RATIO.XS}px;
		margin: 0 -9.7px;
	}

	${({ theme }) => theme.breakpoints.up('sm')} {
		width: ${KEYS_SIZES.BLACK.WIDTH * KEYS_SIZES.RATIO.SM}px;
		height: ${KEYS_SIZES.BLACK.HEIGHT * KEYS_SIZES.RATIO.SM}px;
		margin: 0 -19px;
	}
`;

export default BlackKeyContainer;
