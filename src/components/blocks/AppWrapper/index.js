import styled from 'styled-components';

const AppWrapper = styled.div`
	${(props) => props.theme.layout.columnCenterCenter}
	background-color: ${(props) =>
		props.theme.palette.modes[props.themeMode].background.main};
	height: 100vh;
	width: 100vw;
	padding: ${(props) => props.theme.spacing.getSpacing('sm')};
	& > * {
		margin-top: ${({ theme }) => theme.spacing.getSpacing('lg')};
	}
`;

export default AppWrapper;
