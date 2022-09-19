import styled from 'styled-components';

const BlackKeyLabel = styled.p`
	${({ theme }) => theme.breakpoints.down('sm')} {
		font-size: ${(props) => props.theme.typography.getFontSize('xs3')};
	}

	${({ theme }) => theme.breakpoints.up('sm')} {
		font-size: ${(props) => props.theme.typography.getFontSize('xs')};
	}
`;

export default BlackKeyLabel;
