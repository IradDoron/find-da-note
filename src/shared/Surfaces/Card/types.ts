import { CustomProps } from 'types';

export interface Props {
	children: React.ReactNode;
	custom?: CustomProps;
	mobileProps?: CustomProps;
}
