import styled from 'styled-components';

const WhiteKeyLabel = styled.p`
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: ${(props) => props.theme.typography.getFontSize('xs2')};
	}

	${({ theme }) => theme.breakpoints.up('sm')} {
		font-size: ${(props) => props.theme.typography.getFontSize('sm')};
	}
`;

export default WhiteKeyLabel;
