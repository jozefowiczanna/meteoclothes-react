// lista miast, dł. i szer. geograficzna
const citiesGeo = [
  {
    value: "amsterdam",
    name: "Amsterdam",
    lat: 52.366667,
    lon: 4.9
  },
  {
    value: "andora",
    name: "Andora",
    lat: 42.5,
    lon: 1.5
  },
  {
    value: "ankara",
    name: "Ankara",
    lat: 39.943889,
    lon: 32.856111
  },
  {
    value: "astana",
    name: "Astana",
    lat: 51.166667,
    lon: 71.416667
  },
  {
    value: "ateny",
    name: "Ateny",
    lat: 38,
    lon: 23.716667
  },
  {
    value: "belgrad",
    name: "Belgrad",
    lat: 44.8,
    lon: 20.466667
  },
  {
    value: "berlin",
    name: "Berlin",
    lat: 52.518611,
    lon: 13.408333
  },
  {
    value: "berno",
    name: "Berno",
    lat: 46.94798,
    lon: 7.44743
  },
  {
    value: "bratyslawa",
    name: "Bratysława",
    lat: 48.146825,
    lon: 17.107239
  },
  {
    value: "bruksela",
    name: "Bruksela",
    lat: 50.833333,
    lon: 4.35
  },
  {
    value: "budapeszt",
    name: "Budapeszt",
    lat: 47.5,
    lon: 19.05
  },
  {
    value: "bukareszt",
    name: "Bukareszt",
    lat: 44.416667,
    lon: 26.1
  },
  {
    value: "dublin",
    name: "Dublin",
    lat: 53.333333,
    lon: -6.25
  },
  {
    value: "gdansk",
    name: "Gdańsk",
    lat: 54.3475,
    lon: 18.645278
  },
  {
    value: "helsinki",
    name: "Helsinki",
    lat: 60.166667,
    lon: 24.933333
  },
  {
    value: "kair",
    name: "Kair",
    lat: 30.0626,
    lon: 31.2497
  },
  {
    value: "kijow",
    name: "Kijów",
    lat: 50.45,
    lon: 30.5
  },
  {
    value: "kiszynow",
    name: "Kiszyniów",
    lat: 47.013889,
    lon: 28.85
  },
  {
    value: "kopenhaga",
    name: "Kopenhaga",
    lat: 55.666667,
    lon: 12.566667
  },
  {
    value: "krakow",
    name: "Kraków",
    lat: 50.061389,
    lon: 19.938333
  },
  {
    value: "lizbona",
    name: "Lizbona",
    lat: 38.736946,
    lon: -9.142685
  },
  {
    value: "londyn",
    name: "Londyn",
    lat: 51.509865,
    lon: -0.118092
  },
  {
    value: "lublana",
    name: "Lublana",
    lat: 46.056389,
    lon: 14.507778
  },
  {
    value: "luksemburg",
    name: "Luksemburg",
    lat: 49.610556,
    lon: 6.132778
  },
  {
    value: "madryt",
    name: "Madryt",
    lat: 40.417778,
    lon: -3.694722
  },
  {
    value: "minsk",
    name: "Mińsk",
    lat: 53.9,
    lon: 27.55
  },
  {
    value: "monako",
    name: "Monako",
    lat: 43.731245,
    lon: 7.419744
  },
  {
    value: "moskwa",
    name: "Moskwa",
    lat: 55.75,
    lon: 37.616667
  },
  {
    value: "novosibirsk",
    name: "Novosibirsk",
    lat: 55.018803,
    lon: 82.933952
  },
  {
    value: "oslo",
    name: "Oslo",
    lat: 59.912997,
    lon: 10.737997
  },
  {
    value: "paryz",
    name: "Paryż",
    lat: 48.866667,
    lon: 2.35
  },
  {
    value: "podgorica",
    name: "Podgorica",
    lat: 42.466667,
    lon: 19.266667
  },
  {
    value: "poznan",
    name: "Poznań",
    lat: 52.4064,
    lon: 16.9252
  },
  {
    value: "praga",
    name: "Praga",
    lat: 50.087778,
    lon: 14.421111
  },
  {
    value: "reykjavik",
    name: "Reykjavik",
    lat: 64.128288,
    lon: -21.827774
  },
  {
    value: "ryga",
    name: "Ryga",
    lat: 56.966667,
    lon: 24.133333
  },
  {
    value: "rzym",
    name: "Rzym",
    lat: 41.893056,
    lon: 12.482778
  },
  {
    value: "sanmarino",
    name: "San Marino",
    lat: 43.932011,
    lon: 12.44845
  },
  {
    value: "sarajewo",
    name: "Sarajewo",
    lat: 43.85,
    lon: 18.366667
  },
  {
    value: "skopje",
    name: "Skopje",
    lat: 42,
    lon: 21.433333
  },
  {
    value: "sztokholm",
    name: "Sztokholm",
    lat: 59.333333,
    lon: 18.05
  },
  {
    value: "tallinn",
    name: "Tallinn",
    lat: 59.433333,
    lon: 24.75
  },
  {
    value: "tirana",
    name: "Tirana",
    lat: 41.316667,
    lon: 19.816667
  },
  {
    value: "vaduz",
    name: "Vaduz",
    lat: 47.140972,
    lon: 9.521111
  },
  {
    value: "valletta",
    name: "Valletta",
    lat: 35.897778,
    lon: 14.5125
  },
  {
    value: "warszawa",
    name: "Warszawa",
    lat: 52.232222,
    lon: 21.008333
  },
  {
    value: "wieden",
    name: "Wiedeń",
    lat: 48.216667,
    lon: 16.366667
  },
  {
    value: "wilno",
    name: "Wilno",
    lat: 54.683333,
    lon: 25.283333
  },
  {
    value: "zagrzeb",
    name: "Zagrzeb",
    lat: 45.8,
    lon: 15.966667
  }
];

export default citiesGeo;
