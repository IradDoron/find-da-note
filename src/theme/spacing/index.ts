import { Spacing } from 'theme/spacing/types';

export const spacing: Spacing = {
	values: {
		'1': 2,
		'2': 4,
		'3': 6,
		'4': 8,
		'5': 12,
		'6': 16,
		'7': 20,
		'8': 24,
		'9': 32,
		'10': 40,
		'11': 48,
		'12': 56,
		'13': 64,
		'14': 72,
		'15': 80,
		'16': 88,
		'17': 96,
	},
	unit: 'px',
	getSpacing: (key) => `${spacing.values[key]}${spacing.unit}`,
};
