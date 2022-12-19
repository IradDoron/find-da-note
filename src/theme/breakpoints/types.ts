type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface Breakpoints {
	values: {
		[key in Breakpoint]: number;
	};
	unit: 'px';
	up: (key: Breakpoint) => string;
	down: (key: Breakpoint) => string;
	between: (start: Breakpoint, end: Breakpoint) => string;
}
