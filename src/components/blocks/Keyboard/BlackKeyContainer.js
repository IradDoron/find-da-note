import styled from 'styled-components';

const BlackKeyContainer = styled.div`
	background-color: ${(props) => props.color};
	width: 18px;
	height: 68px;
	margin: 0 -9px;
	z-index: 1;
	border-radius: ${({ theme }) => theme.border.getRadius('sm')};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: #fff;
`;

export default BlackKeyContainer;
