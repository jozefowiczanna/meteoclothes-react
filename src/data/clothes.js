// lista ciuchów podzielona na kategorie
export const clothes = {
	"kurtki" :
		["kurtka jesienna", "kurtka letnia", "kurtka wiosenna", "kurtka zimowa", "kurtka przeciwwiatrowa", "płaszcz jesienny", "płaszcz letni", "płaszcz wiosenny", "płaszcz zimowy"],

	"czapki" :
		["czapka z daszkiem", "czapka zimowa", "kapelusz", "lekka czapka", "nauszniki"],

	"szaliki" :
		["chustka", "cienki szalik", "gruby szalik", "komin"],

	"rękawiczki" :
		["rękawiczki", "rękawiczki bez palców"],

	"buty" :
		["adidasy", "baleriny", "botki", "japonki", "kalosze", "kozaki", "obuwie trekkingowe", "sandały", "trampki", "śniegowce"]
};

// domyślna lista ciuchów dla każdego z warunków z osobna
export const defaultClothes = {
	"con-1": ["czapka zimowa", "gruby szalik", "kurtka zimowa", "buty zimowe", "rękawiczki"],
	"con-2": ["lekka czapka", "adidasy", "płaszcz"],
	"con-3": ["kapelusz", "t-shirt", "krótkie spodenki", "sandały"],
	"con-4": ["nauszniki", "kurtka przeciwwiatrowa"],
	"con-5": ["parasol", "kalosze"]
}