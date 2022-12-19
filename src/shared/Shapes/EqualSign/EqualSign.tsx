import styled from 'styled-components';

import { EqualSignRectangle } from 'shared/Shapes/EqualSign/EqualSignRectangle';

const StyledEqualSignContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
`;

export const EqualSign = () => {
	return (
		<StyledEqualSignContainer>
			<EqualSignRectangle />
			<EqualSignRectangle />
		</StyledEqualSignContainer>
	);
};
