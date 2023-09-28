function sortByPunchesAsc(a, b) {
	return a.punches - b.punches;
}

function sortByPunchesDesc(a, b) {
	return b.punches - a.punches;
}


export { sortByPunchesAsc, sortByPunchesDesc }