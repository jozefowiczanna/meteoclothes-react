export const conditionsStaticData = [
	{
		nr: 1,
		name: "Zimno",
    descriptions: ["Temperatura poniżej"],
    icons: ['thermometer25', "arrowdownBlue"],
		unit: "°C",
    inputGroup: "tempmin",
	},
	{
		nr: 2,
		name: "Umiarkowanie",
    descriptions: ["Temperatura od", "do"],
    icons: ['thermometer50'],
		unit: "°C",
    inputGroup: "tempmin",
	},
	{
		nr: 3,
		name: "Ciepło",
    descriptions: ["Temperatura powyżej"],
    icons: ['thermometer75', "arrowupGreen"],
		unit: "°C",
    inputGroup: "tempmax",
	},
	{
		nr: 4,
		name: "Wiatr",
    descriptions: ["Prędkość wiatru powyżej"],
    icons: ['windCon', "arrowupGray"],
		unit: "km/h",
    inputGroup: "windmin",
	},
	{
		nr: 5,
		name: "Deszcz",
    descriptions: ["Szansa opadów powyżej"],
    icons: ['rainCon', "arrowupBlue"],
		unit: "%",
		defClothes: ["parasol", "kalosze"],
    inputGroup: "rainmin",
	}
]