ej.addCulture( "bg", {
	name: "bg",
	englishName: "Bulgarian",
	nativeName: "български",
	language: "bg",
	numberFormat: {
		",": " ",
		".": ",",
		negativeInfinity: "- безкрайност",
		positiveInfinity: "+ безкрайност",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "лв."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],
				namesAbbr: ["нед","пон","вт","ср","четв","пет","съб"],
				namesShort: ["нд","пн","вт","ср","чт","пт","сб"]
			},
			months: {
				names: ["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември",""],
				namesAbbr: ["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy 'г.'",
				D: "dd MMMM yyyy 'г.'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dd MMMM yyyy 'г.' H:mm",
				F: "dd MMMM yyyy 'г.' H:mm:ss",
				M: "d MMMM",
				Y: "MMMM yyyy 'г.'"
			}
		}
	}
});