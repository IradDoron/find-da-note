import styled from 'styled-components';

import BlackKeyContainer from './BlackKeyContainer';
import BlackKeyLabel from './BlackKeyLabel';
import WhiteKeyContainer from './WhiteKeyContainer';
import WhiteKeyLabel from './WhiteKeyLabel';

const Keyboard = styled.div`
	${({theme}) => theme.layout.flex.row.xCenterYTop}
`;

Keyboard.BlackKeyContainer = BlackKeyContainer;
Keyboard.BlackKeyLabel = BlackKeyLabel;
Keyboard.WhiteKeyContainer = WhiteKeyContainer;
Keyboard.WhiteKeyLabel = WhiteKeyLabel;

export default Keyboard;
