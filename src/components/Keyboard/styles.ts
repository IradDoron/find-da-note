import styled from 'styled-components';

import { Flexbox } from 'shared/Layout';
import { Text } from 'shared/Typography';

import { KEYS_SIZES } from 'consts';

import { theme } from 'theme';

export const StyledKeyboardContainer = styled(Flexbox)``;

interface StyledWhiteKeyContainerProps {
	color: string; // TODO: add color type
}

export const StyledWhiteKeyContainer = styled(
	Flexbox
)<StyledWhiteKeyContainerProps>`
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

StyledWhiteKeyContainer.defaultProps = {
	theme,
};

export const StyledWhiteKeyLabel = styled(Text)`
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: 0.8rem;
	}

	${({ theme }) => theme.breakpoints.between('sm', 'md')} {
		font-size: 1.4rem;
	}

	${({ theme }) => theme.breakpoints.up('md')} {
		font-size: 1.5rem;
	}
`;

StyledWhiteKeyLabel.defaultProps = {
	theme,
};

export const StyledBlackKeyLabel = styled(Text)`
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: 0.8rem;
	}

	${({ theme }) => theme.breakpoints.between('sm', 'md')} {
		font-size: 1.4rem;
	}

	${({ theme }) => theme.breakpoints.up('md')} {
		font-size: 1.5rem;
	}
`;

StyledBlackKeyLabel.defaultProps = {
	theme,
};

interface StyledBlackKeyContainerProps {
	color: string; // TODO: add color type
}

export const StyledBlackKeyContainer = styled(
	Flexbox
)<StyledBlackKeyContainerProps>`
	background-color: ${(props) => props.color};
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	z-index: 1;
	color: #fff;

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

StyledBlackKeyContainer.defaultProps = {
	theme,
};
