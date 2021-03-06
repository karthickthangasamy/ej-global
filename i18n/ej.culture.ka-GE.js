ej.addCulture( "ka-GE", {
	name: "ka-GE",
	englishName: "Georgian (Georgia)",
	nativeName: "ქართული (საქართველო)",
	language: "ka",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "არ არის რიცხვი",
		negativeInfinity: "-უსასრულობა",
		positiveInfinity: "უსასრულობა",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "ლ."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],
				namesAbbr: ["ორშ.","სამშ.","ოთხშ.","ხუთშ.","პარ.","შაბ.","კვ."],
				namesShort: ["ორ","სმ","ოთ","ხთ","პრ","შბ","კვ"]
			},
			months: {
				names: ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი",""],
				namesAbbr: ["იან","თებ","მარ","აპრ","მაის","ივნ","ივლ","აგვ","სექ","ოქტ","ნოემ","დეკ",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yyyy",
				D: "dddd, d MMMM, yyyy 'წელი'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, d MMMM, yyyy 'წელი' H:mm",
				F: "dddd, d MMMM, yyyy 'წელი' H:mm:ss",
				M: "d MMMM"
			}
		}
	}
});
