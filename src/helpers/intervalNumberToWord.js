function intervalNumberToWord(interval) {
	switch (interval) {
		case 1:
			return 'פרימה';
		case 2:
			return 'סקונדה';
		case 3:
			return 'טרצה';
		case 4:
			return 'קוורטה';
		case 5:
			return 'קווינטה';
		case 6:
			return 'סקסטה';
		case 7:
			return 'ספטימה';
		case 8:
			return 'אוקטבה';
		default:
			return 'יש פה באג, תקראו לעירד שיתקן את זה';
	}
}

export default intervalNumberToWord;
