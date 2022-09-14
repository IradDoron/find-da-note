function latinLetterToHebrew(letter) {
	switch (letter) {
		case 'C': {
			return 'דו';
		}
		case 'D': {
			return 'רה';
		}
		case 'E': {
			return 'מי';
		}
		case 'F': {
			return 'פה';
		}
		case 'G': {
			return 'סול';
		}
		case 'A': {
			return 'לה';
		}
		case 'B': {
			return 'סי';
		}

		default: {
			return letter;
		}
	}
}

export default latinLetterToHebrew;
