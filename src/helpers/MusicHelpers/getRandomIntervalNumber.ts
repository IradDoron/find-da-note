import { MathHelpers } from 'helpers';

import { MAX_INTERVAL_NUMBER, MIN_INTERVAL_NUMBER } from 'consts';

import { IntervalNumber } from 'types';

export const getRandomIntervalNumber = (): IntervalNumber => {
	const interval = MathHelpers.getRandomIntegerInRange(
		MIN_INTERVAL_NUMBER,
		MAX_INTERVAL_NUMBER
	) as IntervalNumber;
	return interval;
};
