import styled from 'styled-components';

import Body from './Body';
import Head from './Head';

const Arrow = styled.div`
	display: flex;
	flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transform: rotate(${(props) => props.dir.toUpperCase() === 'UP' ? '0' : '180'}deg);
    
`;

Arrow.Head = Head;
Arrow.Body = Body;

export default Arrow;
