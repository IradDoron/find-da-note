import styled from 'styled-components';

import Label from './Label';

const LabelBox = styled.div`
	background-color: ${({ background }) => background};
	padding: ${({ theme }) => theme.spacing.getSpacing('sm')};
	padding: ${(props) => props.theme.spacing.getSpacing(props.padding)};

	border-radius: ${({ theme }) => theme.border.getRadius('lg')};
	width: fit-content;
	height: fit-content;
	min-width: ${({ minWidth }) => minWidth}px;
	text-align: center;
`;

LabelBox.Label = Label;

export default LabelBox;
