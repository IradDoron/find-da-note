type DurationValue =
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
	| '17'
	| '18'
	| '19'
	| '20';

type IterationCount = number | 'infinite';

type AnimationType = 'fadeIn' | 'fadeOut';

export interface Animation {
	durationValues: {
		[key in DurationValue]: number;
	};
	durationUnit: 'ms';
	getDuration: (key: DurationValue) => string;
	types: {
		[key in AnimationType]: string;
	};
	getAnimation: (
		type: AnimationType,
		duration: DurationValue,
		iterationCount: IterationCount
	) => string;
}
