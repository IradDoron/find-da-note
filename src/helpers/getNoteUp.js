function getNoteUp(note) {
    const octave = note.slice(-1);
    const noteName = note.slice(0, -1);

    switch (noteName) {
        case 'C': {
            return 'C#' + octave;
        }
        case 'C#': {
            return 'D' + octave;
        }
        case 'D': {
            return 'D#' + octave;
        }
        case 'D#': {
            return 'E' + octave;
        }
        case 'E': {
            return 'F' + octave;
        }
        case 'F': {
            return 'F#' + octave;
        }
        case 'F#': {
            return 'G' + octave;
        }
        case 'G': {
            return 'G#' + octave;
        }
        case 'G#': {
            return 'A' + octave;
        }
        case 'A': {
            return 'A#' + octave;
        }
        case 'A#': {
            return 'B' + octave;
        }
        case 'B': {
            return 'C' + (parseInt(octave) + 1);
        }

        default: {
            return note;
        }
    }
}

export default getNoteUp;