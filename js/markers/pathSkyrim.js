const lPSKY = JSON.parse(localStorage.getItem("listPathSky")) || [];

if (lPSKY?.length > 0) {
	listPathSky = lPSKY;
} else {
	listPathSky = [];
	localStorage.setItem("listPathSky", JSON.stringify(listPathSky));
}

if (TYPE_MAP === "skyrim") listPath = listPathSky;

// top: 449,
// left: 1058,
