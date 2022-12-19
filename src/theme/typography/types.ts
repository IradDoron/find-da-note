export type TypographyKey =
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
	| '20'
	| '21'
	| '22'
	| '23'
	| '24'
	| '25'
	| '26'
	| '27'
	| '28'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'body1'
	| 'body2';

export interface FontFamily {
	mainTitle: string;
	subTitle: string;
	body: string;
	serif: {
		[key: string]: string;
	};
	sansSerif: {
		[key: string]: string;
	};
	monospace: {
		[key: string]: string;
	};
	cursive: {
		[key: string]: string;
	};
	fantasy: {
		[key: string]: string;
	};
}

export interface Typography {
	values: {
		[key in TypographyKey]: number;
	};
	unit: 'rem';
	getFontSize: (key: TypographyKey) => string;
	fontFamily: FontFamily;
}
