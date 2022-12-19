export type SpacingKey =
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
	| '11'
	| '12'
	| '13'
	| '14'
	| '15'
	| '16'
	| '17';

export interface Spacing {
	values: {
		[key in SpacingKey]: number;
	};
	unit: 'px';
	getSpacing: (key: SpacingKey) => string;
}
