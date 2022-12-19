import { Layout } from 'theme/layout/types';
export const layout: Layout = {
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
};
