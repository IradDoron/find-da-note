const theme = {
	palette: {
		modes: {
			dark: {
				background: {
					main: '#4C506B',
					light: '#8287A8',
					dark: '#2E3148',
					contrastText: '#fff',
				},
				keyboard: {
					white: {
						default: '#fff',
					},
					black: {
						default: '#000',
					},
				},
				whiteKey: {
					default: '#fff',
					startNote: '#939DFF',
					userChoice: '#FFC75B',
					correct: '#90EF64',
					incorrect: '#FF5656',
				},
				blackKey: {
					default: '#000',
				},
				noteButton: {
					default: '#fff',
					hover: '#8287A8',
					active: '#FFC75B',
				},
				userChoiceButton: {
					correct: '#90EF64',
					incorrect: '#FF5656',
					default: '#fff',
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
		unit: 'px',
		up: (key) =>
			`@media (min-width:${theme.breakpoints.values[key]}${theme.breakpoints.unit})`,
		down: (key) =>
			`@media (max-width:${theme.breakpoints.values[key]}${theme.breakpoints.unit})`,
		between: (start, end) =>
			`@media (min-width:${theme.breakpoints.values[start]}${theme.breakpoints.unit}) and (max-width:${theme.breakpoints.values[end]}${theme.breakpoints.unit})`,
	},
	typography: {
		values: {
			xs3: 0.5,
			xs2: 0.75,
			xs: 1,
			sm: 1.25,
			md: 1.5,
			lg: 1.75,
			xl: 2,
			xl2: 2.25,
			xl3: 2.5,
			xl4: 2.75,
			xl5: 3,
			xl6: 3.25,
			xl7: 3.5,
			xl8: 3.75,
			xl9: 4,
			xl10: 4.25,
			xl11: 4.5,
			xl12: 4.75,
			xl13: 5,
			xl14: 5.25,
			xl15: 5.5,
			xl16: 5.75,
			xl17: 6,
		},
		unit: 'rem',
		getFontSize: (key) =>
			`${theme.typography.values[key]}${theme.typography.unit}`,
		getDefaultFontSize: {
			h1: () => theme.typography.getFontSize('xl17'),
			h2: () => theme.typography.getFontSize('xl8'),
			h3: () => theme.typography.getFontSize('xl5'),
			h4: () => theme.typography.getFontSize('xl2'),
			h5: () => theme.typography.getFontSize('md'),
			h6: () => theme.typography.getFontSize('sm'),
			body1: () => theme.typography.getFontSize('xs'),
		},
		fontFamily: {
			mainTitle: 'Roboto, sans-serif',
			secondaryTitle: 'Arial, sans-serif',
			body: 'Roboto, sans-serif',
			serif: {
				georgia: 'Georgia, serif',
				times: 'Times New Roman, serif',
			},
			sansSerif: {
				arial: 'Arial, sans-serif',
				helvetica: 'Helvetica, sans-serif',
				tahoma: 'Tahoma, sans-serif',
				verdana: 'Verdana, sans-serif',
			},
			monospace: {
				courier: 'Courier New, monospace',
				lucida: 'Lucida Console, monospace',
			},
			cursive: {
				comic: 'Comic Sans MS, cursive',
				impact: 'Impact, cursive',
				papyrus: 'Papyrus, cursive',
			},
			fantasy: {
				fantasy: 'Fantasy, cursive',
			},
		},
	},
	layout: {
		flex: {
			row: {
				xStartYTop:
					'display: flex; flex-direction: row; align-items: flex-start; justify-content: flex-start;',
				xCenterYTop:
					'display: flex; flex-direction: row; align-items: flex-start; justify-content: center;',
				xEndYTop:
					'display: flex; flex-direction: row; align-items: flex-start; justify-content: flex-end;',
				xStartYCenter:
					'display: flex; flex-direction: row; align-items: center; justify-content: flex-start;',
				xCenterYCenter:
					'display: flex; flex-direction: row; align-items: center; justify-content: center;',
				xEndYCenter:
					'display: flex; flex-direction: row; align-items: center; justify-content: flex-end;',
				xStartYBottom:
					'display: flex; flex-direction: row; align-items: flex-end; justify-content: flex-start;',
				xCenterYBottom:
					'display: flex; flex-direction: row; align-items: flex-end; justify-content: center;',
				xEndYBottom:
					'display: flex; flex-direction: row; align-items: flex-end; justify-content: flex-end;',
			},
			column: {
				xStartYTop:
					'display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;',
				xCenterYTop:
					'display: flex; flex-direction: column; align-items: center; justify-content: flex-start;',
				xEndYTop:
					'display: flex; flex-direction: column; align-items: flex-end; justify-content: flex-start;',
				xStartYCenter:
					'display: flex; flex-direction: column; align-items: flex-start; justify-content: center;',
				xCenterYCenter:
					'display: flex; flex-direction: column; align-items: center; justify-content: center;',
				xEndYCenter:
					'display: flex; flex-direction: column; align-items: flex-end; justify-content: center;',
				xStartYBottom:
					'display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end;',
				xCenterYBottom:
					'display: flex; flex-direction: column; align-items: center; justify-content: flex-end;',
				xEndYBottom:
					'display: flex; flex-direction: column; align-items: flex-end; justify-content: flex-end;',
			},
		},
	},
	spacing: {
		values: {
			xs: 8,
			sm: 16,
			md: 24,
			lg: 32,
			xl: 40,
			xl2: 48,
			xl3: 56,
			xl4: 64,
			xl5: 72,
			xl6: 80,
			xl7: 88,
			xl8: 96,
		},
		unit: 'px',
		getSpacing: (key) => `${theme.spacing.values[key]}${theme.spacing.unit}`,
	},
	border: {
		values: {
			xs: 2,
			sm: 4,
			md: 6,
			lg: 8,
			xl: 10,
			xl2: 12,
			xl3: 14,
			xl4: 16,
			xl5: 18,
			xl6: 20,
		},
		unit: 'px',
		getRadius: (key) => `${theme.border.values[key]}${theme.border.unit}`,
	},
	animations: {
		durationValues: {
			xs: 100,
			sm: 200,
			md: 300,
			lg: 400,
			xl: 500,
			xl2: 600,
			xl3: 700,
			xl4: 800,
			xl5: 900,
			xl6: 1000,
			xl7: 1100,
			xl8: 1200,
			xl9: 1300,
			xl10: 1400,
			xl11: 1500,
			xl12: 1600,
			xl13: 1700,
			xl14: 1800,
			xl15: 1900,
			xl16: 2000,
		},
		durationUnit: 'ms',
		getDuration: (key) =>
			`${theme.animations.durationValues[key]}${theme.animations.durationUnit}`,

		getIterationCount: (num = 1) => {
			if (num >= 0) {
				return num;
			} else {
				return 'infinite';
			}
		},

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
			`${
				theme.animations.types[type]
			} animation: ${type} ${theme.animations.getDuration(
				duration
			)} ${theme.animations.getIterationCount(iterationCount)};`,
	},
};
export default theme;
