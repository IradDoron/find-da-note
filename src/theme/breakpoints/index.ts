import { Breakpoints } from 'theme/breakpoints/types';
export const breakpoints: Breakpoints = {
	values: {
		xs: 0,
		sm: 657,
		md: 960,
		lg: 1280,
		xl: 1920,
	},
	unit: 'px',
	up: (key) =>
		`@media (min-width:${breakpoints.values[key]}${breakpoints.unit})`,
	down: (key) =>
		`@media (max-width:${breakpoints.values[key]}${breakpoints.unit})`,
	between: (start, end) =>
		`@media (min-width:${breakpoints.values[start]}${breakpoints.unit}) and (max-width:${breakpoints.values[end]}${breakpoints.unit})`,
};
