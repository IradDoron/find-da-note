import { CustomProps } from 'types';

export interface Props {
	children: React.ReactNode;
	onClick?: () => void;
	isDisabled?: boolean;
	custom?: CustomProps;
}
