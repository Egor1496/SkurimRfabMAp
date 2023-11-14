const lPSOLS = JSON.parse(localStorage.getItem("listPathSols")) || [];

if (lPSOLS?.length > 0) {
	listPathSols = lPSOLS;
} else {
	listPathSols = [];
	localStorage.setItem("listPathSols", JSON.stringify(listPathSols));
}
