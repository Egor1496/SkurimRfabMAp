const coppyObject = (top, left) => {
	const copy = `
{
	title: "",
	description: "",
	secondDescription: [""],
	type: "",
	nameIcon: "",
	scale: 0.3,
	id: "id----------",
	top: ${top},
	left: ${left},
},
`;
	navigator.clipboard.writeText(copy);
};
