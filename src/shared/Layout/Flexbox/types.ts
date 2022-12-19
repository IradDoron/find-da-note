import { BaseStylesProps } from 'types';

export interface Props extends BaseStylesProps {
	children?: React.ReactNode;
	direction?: 'column' | 'row';
	gap?: string;
}
