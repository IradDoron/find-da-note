import { Animation } from 'theme/animation/types';

export const animation: Animation = {
	durationValues: {
		'1': 100,
		'2': 200,
		'3': 300,
		'4': 400,
		'5': 500,
		'6': 600,
		'7': 700,
		'8': 800,
		'9': 900,
		'10': 1000,
		'11': 1100,
		'12': 1200,
		'13': 1300,
		'14': 1400,
		'15': 1500,
		'16': 1600,
		'17': 1700,
		'18': 1800,
		'19': 1900,
		'20': 2000,
	},
	durationUnit: 'ms',
	getDuration: (key) =>
		`${animation.durationValues[key]}${animation.durationUnit}`,

	types: {
		fadeIn: `
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        `,
		fadeOut: `
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
        `,
	},
	getAnimation: (type, duration, iterationCount) =>
		`${animation.types[type]} animation: ${type} ${animation.getDuration(
			duration
		)} ${iterationCount};`,
};
