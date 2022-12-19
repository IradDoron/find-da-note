import { Note, NoteName } from 'types';

export const getNoteUp = (note: Note): Note => {
	const octave = note.slice(-1);
	const noteName = note.slice(0, -1) as NoteName;

	switch (noteName) {
		case 'C': {
			return ('C#' + octave) as Note;
		}
		case 'C#': {
			return ('D' + octave) as Note;
		}
		case 'D': {
			return ('D#' + octave) as Note;
		}
		case 'D#': {
			return ('E' + octave) as Note;
		}
		case 'E': {
			return ('F' + octave) as Note;
		}
		case 'F': {
			return ('F#' + octave) as Note;
		}
		case 'F#': {
			return ('G' + octave) as Note;
		}
		case 'G': {
			return ('G#' + octave) as Note;
		}
		case 'G#': {
			return ('A' + octave) as Note;
		}
		case 'A': {
			return ('A#' + octave) as Note;
		}
		case 'A#': {
			return ('B' + octave) as Note;
		}
		case 'B': {
			return ('C' + (parseInt(octave) + 1)) as Note;
		}

		default: {
			return note;
		}
	}
};
