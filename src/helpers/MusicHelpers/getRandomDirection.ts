import { IntervalDirection } from 'types';

export const getRandomDirection = (): IntervalDirection => {
	const random = Math.random();
	const direction: IntervalDirection = random > 0.5 ? 'up' : 'down';
	return direction;
};
