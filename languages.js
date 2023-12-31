const languages = [
  {
    no: "0",
    name: "Automatisch",
    native: "Detecteren",
    code: "auto",
  },
  {
    no: "1",
    name: "Afrikaans",
    native: "Afrikaans",
    code: "af",
  },
  {
    no: "2",
    name: "Albanees",
    native: "Shqip",
    code: "sq",
  },
  {
    no: "3",
    name: "Arabisch",
    native: "عربي",
    code: "ar",
  },
  {
    no: "4",
    name: "Armeens",
    native: "Հայերէն",
    code: "hy",
  },
  {
    no: "5",
    name: "Azerbeidzjaans",
    native: "آذربایجان دیلی",
    code: "az",
  },
  {
    no: "6",
    name: "Baskisch",
    native: "Euskara",
    code: "eu",
  },
  {
    no: "7",
    name: "Belarusisch",
    native: "Беларуская",
    code: "be",
  },
  {
    no: "8",
    name: "Bulgaars",
    native: "Български",
    code: "bg",
  },
  {
    no: "9",
    name: "Catalaans",
    native: "Català",
    code: "ca",
  },
  {
    no: "10",
    name: "Chinees (Vereenvoudigd)",
    native: "中文简体",
    code: "zh-CN",
  },
  {
    no: "11",
    name: "Chinees (Traditioneel)",
    native: "中文繁體",
    code: "zh-TW",
  },
  {
    no: "12",
    name: "Kroatisch",
    native: "Hrvatski",
    code: "hr",
  },
  {
    no: "13",
    name: "Tsjechisch",
    native: "Čeština",
    code: "cs",
  },
  {
    no: "14",
    name: "Deens",
    native: "Dansk",
    code: "da",
  },
  {
    no: "15",
    name: "Nederlands",
    native: "Nederlands",
    code: "nl",
  },
  {
    no: "16",
    name: "Engels",
    native: "English",
    code: "en",
  },
  {
    no: "17",
    name: "Ests",
    native: "Eesti keel",
    code: "et",
  },
  {
    no: "18",
    name: "Filipijns",
    native: "Filipino",
    code: "tl",
  },
  {
    no: "19",
    name: "Fins",
    native: "Suomi",
    code: "fi",
  },
  {
    no: "20",
    name: "Frans",
    native: "Français",
    code: "fr",
  },
  {
    no: "21",
    name: "Galicisch",
    native: "Galego",
    code: "gl",
  },
  {
    no: "22",
    name: "Georgisch",
    native: "ქართული",
    code: "ka",
  },
  {
    no: "23",
    name: "Duits",
    native: "Deutsch",
    code: "de",
  },
  {
    no: "24",
    name: "Grieks",
    native: "Ελληνικά",
    code: "el",
  },
  {
    no: "25",
    name: "Haïtiaans Creools",
    native: "Kreyòl ayisyen",
    code: "ht",
  },
  {
    no: "26",
    name: "Hebreeuws",
    native: "עברית",
    code: "iw",
  },
  {
    no: "27",
    name: "Hindi",
    native: "हिन्दी",
    code: "hi",
  },
  {
    no: "28",
    name: "Hongaars",
    native: "Magyar",
    code: "hu",
  },
  {
    no: "29",
    name: "IJslands",
    native: "Íslenska",
    code: "is",
  },
  {
    no: "30",
    name: "Indonesisch",
    native: "Bahasa Indonesia",
    code: "id",
  },
  {
    no: "31",
    name: "Iers",
    native: "Gaeilge",
    code: "ga",
  },
  {
    no: "32",
    name: "Italiaans",
    native: "Italiano",
    code: "it",
  },
  {
    no: "33",
    name: "Japans",
    native: "日本語",
    code: "ja",
  },
  {
    no: "34",
    name: "Koreaans",
    native: "한국어",
    code: "ko",
  },
  {
    no: "35",
    name: "Lets",
    native: "Latviešu",
    code: "lv",
  },
  {
    no: "36",
    name: "Litouws",
    native: "Lietuvių kalba",
    code: "lt",
  },
  {
    no: "37",
    name: "Macedonisch",
    native: "Македонски",
    code: "mk",
  },
  {
    no: "38",
    name: "Maleis",
    native: "Malay",
    code: "ms",
  },
  {
    no: "39",
    name: "Maltees",
    native: "Malti",
    code: "mt",
  },
  {
    no: "40",
    name: "Noors",
    native: "Norsk",
    code: "no",
  },
  {
    no: "41",
    name: "Perzisch",
    native: "فارسی",
    code: "fa",
  },
  {
    no: "42",
    name: "Pools",
    native: "Polski",
    code: "pl",
  },
  {
    no: "43",
    name: "Portugees",
    native: "Português",
    code: "pt",
  },
  {
    no: "44",
    name: "Roemeens",
    native: "Română",
    code: "ro",
  },
  {
    no: "45",
    name: "Russisch",
    native: "Русский",
    code: "ru",
  },
  {
    no: "46",
    name: "Servisch",
    native: "Српски",
    code: "sr",
  },
  {
    no: "47",
    name: "Slowaaks",
    native: "Slovenčina",
    code: "sk",
  },
  {
    no: "48",
    name: "Sloveens",
    native: "Slovensko",
    code: "sl",
  },
  {
    no: "49",
    name: "Spaans",
    native: "Español",
    code: "es",
  },
  {
    no: "50",
    name: "Swahili",
    native: "Kiswahili",
    code: "sw",
  },
  {
    no: "51",
    name: "Zweeds",
    native: "Svenska",
    code: "sv",
  },
  {
    no: "52",
    name: "Thai",
    native: "ไทย",
    code: "th",
  },
  {
    no: "53",
    name: "Turks",
    native: "Türkçe",
    code: "tr",
  },
  {
    no: "54",
    name: "Oekraïens",
    native: "Українська",
    code: "uk",
  },
  {
    no: "55",
    name: "Urdu",
    native: "اردو",
    code: "ur",
  },
  {
    no: "56",
    name: "Vietnamees",
    native: "Tiếng Việt",
    code: "vi",
  },
  {
    no: "57",
    name: "Welsh",
    native: "Cymraeg",
    code: "cy",
  },
  {
    no: "58",
    name: "Jiddisch",
    native: "ייִדיש",
    code: "yi",
  },
];
