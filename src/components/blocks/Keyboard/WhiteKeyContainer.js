import styled from 'styled-components';

const WhiteKeyContainer = styled.div`
	background-color: ${(props) => props.color};
	width: 24px;
	height: 100px;
	box-shadow: inset 0 0 2px #000;
	border-radius: ${({ theme }) => theme.border.getRadius('sm')};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`;

export default WhiteKeyContainer;
