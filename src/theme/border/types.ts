export type BorderKey =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10';

export type RadiusKey =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| 'pill'
	| 'circle';

export interface Border {
	values: {
		[key in BorderKey]: number;
	};
	unit: 'px';
	getBorder: (key: BorderKey) => string;
	radiusValues: {
		[key in RadiusKey]: string;
	};
	getRadius: (key: RadiusKey) => string;
}
