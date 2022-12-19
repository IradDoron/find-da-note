type FlexOptions =
	| 'xStartYTop'
	| 'xCenterYTop'
	| 'xEndYTop'
	| 'xStartYCenter'
	| 'xCenterYCenter'
	| 'xEndYCenter'
	| 'xStartYBottom'
	| 'xCenterYBottom'
	| 'xEndYBottom';

export interface Layout {
	row: {
		[key in FlexOptions]: string;
	};
	column: {
		[key in FlexOptions]: string;
	};
}
