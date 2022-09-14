function getColorByStatusAndType(status, type, theme, themeMode) {
	return theme.palette.modes[themeMode][type][status];
}

export default getColorByStatusAndType;
