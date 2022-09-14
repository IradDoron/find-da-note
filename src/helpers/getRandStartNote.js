function getRandStartNote() {
	const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
	const randIndex = Math.floor(Math.random() * notes.length);
	return notes[randIndex];
}

export default getRandStartNote;
