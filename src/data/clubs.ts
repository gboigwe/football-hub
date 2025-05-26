import { Club } from '../types';

export const topClubs: Club[] = [
  {
    id: "man-utd",
    name: "Manchester United",
    fullName: "Manchester United Football Club",
    country: "England",
    established: 1878,
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png",
    stadiumImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stadium: "Old Trafford",
    stadiumCapacity: 74140,
    nickname: "The Red Devils",
    location: "Manchester, England",
    website: "https://www.manutd.com",
    league: "Premier League",
    currentManager: "Erik ten Hag",
    description: "Manchester United is one of the most successful and widely supported football clubs in the world, with a rich history spanning over 140 years.",
    history: "Founded as Newton Heath LYR Football Club in 1878, Manchester United has won 20 league titles, 12 FA Cups, and 3 UEFA Champions League titles. The club has been home to legendary players like George Best, Bobby Charlton, Eric Cantona, and Cristiano Ronaldo.",
    players: ["marcus-rashford", "bruno-fernandes", "casemiro", "harry-maguire", "jadon-sancho", "antony", "christian-eriksen", "fred", "scott-mctominay", "diogo-dalot", "luke-shaw", "raphael-varane", "lisandro-martinez", "andre-onana", "mason-mount"],
    trophies: {
      total: 66,
      major: 42,
      minor: 24
    },
    statistics: {
      leagueTitles: 20,
      europeanTitles: 3,
      domesticCups: 13,
      worldTitles: 2
    },
    currentSeason: {
      position: 8,
      played: 25,
      won: 12,
      drawn: 4,
      lost: 9,
      goalsFor: 35,
      goalsAgainst: 32,
      points: 40
    },
    timeline: [
      {
        year: "2008",
        title: "UEFA Champions League Victory",
        description: "Won the Champions League final against Chelsea in Moscow on penalties, completing a historic double.",
        type: "trophy",
        image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        year: "2013",
        title: "Sir Alex Ferguson Retirement",
        description: "The legendary manager retired after 26 years, ending the most successful era in the club's history.",
        type: "event"
      },
      {
        year: "2016",
        title: "Europa League Champions",
        description: "Won the Europa League under José Mourinho, securing Champions League qualification.",
        type: "trophy"
      },
      {
        year: "2021",
        title: "Cristiano Ronaldo Returns",
        description: "The Portuguese superstar returned to Old Trafford after 12 years away.",
        type: "player"
      }
    ]
  },
  {
    id: "barcelona",
    name: "FC Barcelona", 
    fullName: "Futbol Club Barcelona",
    country: "Spain",
    established: 1899,
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
    stadiumImage: "https://images.unsplash.com/photo-1568625537845-d1a396d5b7eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stadium: "Camp Nou",
    stadiumCapacity: 99354,
    nickname: "Barça",
    location: "Barcelona, Catalonia, Spain",
    website: "https://www.fcbarcelona.com",
    league: "La Liga",
    currentManager: "Xavi Hernández",
    description: "FC Barcelona is one of the most successful clubs in Spanish and European football, known for its distinctive playing style and cultural significance in Catalonia.",
    history: "Founded in 1899, Barcelona has won 27 La Liga titles, 31 Copa del Rey trophies, and 5 UEFA Champions League titles. The club has been home to legendary players like Johan Cruyff, Ronaldinho, and Lionel Messi.",
    players: ["robert-lewandowski", "pedri", "gavi", "frenkie-de-jong", "ronald-araujo", "jules-kounde", "raphinha", "ferran-torres", "ansu-fati", "ter-stegen", "jordi-alba", "sergio-busquets", "pablo-gavi", "ousmane-dembele", "fermin-lopez"],
    trophies: {
      total: 98,
      major: 74,
      minor: 24
    },
    statistics: {
      leagueTitles: 27,
      europeanTitles: 5,
      domesticCups: 31,
      worldTitles: 3
    },
    currentSeason: {
      position: 3,
      played: 25,
      won: 16,
      drawn: 5,
      lost: 4,
      goalsFor: 48,
      goalsAgainst: 25,
      points: 53
    },
    timeline: [
      {
        year: "2009",
        title: "Historic Sextuple",
        description: "Won all six possible trophies in one calendar year under Pep Guardiola.",
        type: "trophy"
      },
      {
        year: "2015",
        title: "Champions League Treble",
        description: "Won Champions League, La Liga, and Copa del Rey with MSN attacking trio.",
        type: "trophy"
      },
      {
        year: "2021",
        title: "Lionel Messi Departure",
        description: "The greatest player in club history left after 17 years due to financial constraints.",
        type: "event"
      },
      {
        year: "2022",
        title: "Robert Lewandowski Arrival",
        description: "Signed the Polish striker to lead the new era of Barcelona football.",
        type: "player"
      }
    ]
  },
  {
    id: "real-madrid",
    name: "Real Madrid",
    fullName: "Club de Fútbol Real Madrid",
    country: "Spain", 
    established: 1902,
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png",
    stadiumImage: "https://images.unsplash.com/photo-1541689221361-ad47e325d6a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stadium: "Santiago Bernabéu",
    stadiumCapacity: 81044,
    nickname: "Los Blancos",
    location: "Madrid, Spain",
    website: "https://www.realmadrid.com",
    league: "La Liga",
    currentManager: "Carlo Ancelotti",
    description: "Real Madrid is the most successful club in European football history, known for its galáctico policy and record number of European Cup/Champions League titles.",
    history: "Founded in 1902, Real Madrid has won 35 La Liga titles and a record 14 European Cup/Champions League titles. The club has been home to legends like Alfredo Di Stéfano, Zinedine Zidane, and Cristiano Ronaldo.",
    players: ["karim-benzema", "vinicius-junior", "luka-modric", "toni-kroos", "eder-militao", "david-alaba", "thibaut-courtois", "rodrygo", "eduardo-camavinga", "aurelien-tchouameni", "dani-carvajal", "ferland-mendy", "antonio-rudiger", "federico-valverde", "jude-bellingham"],
    trophies: {
      total: 96,
      major: 68,
      minor: 28
    },
    statistics: {
      leagueTitles: 35,
      europeanTitles: 14,
      domesticCups: 19,
      worldTitles: 8
    },
    currentSeason: {
      position: 2,
      played: 25,
      won: 17,
      drawn: 6,
      lost: 2,
      goalsFor: 52,
      goalsAgainst: 21,
      points: 57
    },
    timeline: [
      {
        year: "2009",
        title: "Cristiano Ronaldo Arrival",
        description: "Signed the Portuguese superstar for a then-world record €94 million.",
        type: "player"
      },
      {
        year: "2014",
        title: "La Décima",
        description: "Won the 10th European Cup/Champions League title, defeating Atlético Madrid.",
        type: "trophy"
      },
      {
        year: "2018",
        title: "Three-peat Champions League",
        description: "Won third consecutive Champions League title, beating Liverpool in the final.",
        type: "trophy"
      },
      {
        year: "2022",
        title: "Champions League 14",
        description: "Won record-extending 14th Champions League title with incredible comeback victories.",
        type: "trophy"
      }
    ]
  },
  {
    id: "liverpool",
    name: "Liverpool FC",
    fullName: "Liverpool Football Club", 
    country: "England",
    established: 1892,
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
    stadiumImage: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stadium: "Anfield",
    stadiumCapacity: 53394,
    nickname: "The Reds",
    location: "Liverpool, England",
    website: "https://www.liverpoolfc.com",
    league: "Premier League",
    currentManager: "Jürgen Klopp",
    description: "Liverpool is one of the most successful clubs in English and European football, famous for its passionate fanbase and 'You'll Never Walk Alone' anthem.",
    history: "Founded in 1892, Liverpool has won 19 league titles and 6 European Cup/Champions League titles. The club's golden era under Bob Paisley in the 1970s and 1980s established them as a European powerhouse.",
    players: ["mohamed-salah", "sadio-mane", "virgil-van-dijk", "alisson-becker", "jordan-henderson", "fabinho", "thiago-alcantara", "roberto-firmino", "darwin-nunez", "luis-diaz", "cody-gakpo", "andrew-robertson", "trent-alexander-arnold", "diogo-jota", "harvey-elliott"],
    trophies: {
      total: 68,
      major: 47,
      minor: 21
    },
    statistics: {
      leagueTitles: 19,
      europeanTitles: 6,
      domesticCups: 8,
      worldTitles: 1
    },
    currentSeason: {
      position: 5,
      played: 25,
      won: 14,
      drawn: 6,
      lost: 5,
      goalsFor: 42,
      goalsAgainst: 28,
      points: 48
    },
    timeline: [
      {
        year: "2005",
        title: "Istanbul Miracle",
        description: "Incredible comeback from 3-0 down to beat AC Milan in the Champions League final.",
        type: "trophy"
      },
      {
        year: "2015",
        title: "Jürgen Klopp Arrival",
        description: "The German manager took over and transformed the club's playing style.",
        type: "event"
      },
      {
        year: "2019",
        title: "Champions League Glory",
        description: "Won the sixth European Cup, beating Tottenham in the final in Madrid.",
        type: "trophy"
      },
      {
        year: "2020",
        title: "Premier League Champions",
        description: "Ended 30-year wait for the league title with record-breaking season.",
        type: "trophy"
      }
    ]
  },
  {
    id: "psg",
    name: "Paris Saint-Germain",
    fullName: "Paris Saint-Germain Football Club",
    country: "France",
    established: 1970,
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-PSG-Logo.png",
    stadiumImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stadium: "Parc des Princes",
    stadiumCapacity: 47929,
    nickname: "Les Parisiens",
    location: "Paris, France",
    website: "https://www.psg.fr",
    league: "Ligue 1",
    currentManager: "Luis Enrique",
    description: "Paris Saint-Germain has become one of Europe's elite clubs, known for attracting world-class talent and dominating French football.",
    history: "Founded in 1970, PSG has won 11 Ligue 1 titles and reached the Champions League final in 2020. The club's modern era began with significant investment in 2011, transforming them into a global powerhouse.",
    players: ["kylian-mbappe", "neymar-jr", "lionel-messi", "marco-verratti", "marquinhos", "presnel-kimpembe", "gianluigi-donnarumma", "sergio-ramos", "achraf-hakimi", "vitinha", "warren-zaire-emery", "randal-kolo-muani", "ousmane-dembele", "bradley-barcola", "manuel-ugarte"],
    trophies: {
      total: 47,
      major: 30,
      minor: 17
    },
    statistics: {
      leagueTitles: 11,
      europeanTitles: 0,
      domesticCups: 14,
      worldTitles: 0
    },
    currentSeason: {
      position: 1,
      played: 24,
      won: 18,
      drawn: 4,
      lost: 2,
      goalsFor: 55,
      goalsAgainst: 18,
      points: 58
    },
    timeline: [
      {
        year: "2011",
        title: "QSI Takeover",
        description: "Qatar Sports Investments acquired the club, beginning a new era of investment.",
        type: "event"
      },
      {
        year: "2017",
        title: "Neymar World Record Transfer",
        description: "Signed Neymar from Barcelona for €222 million, breaking the transfer record.",
        type: "player"
      },
      {
        year: "2020",
        title: "First Champions League Final",
        description: "Reached their first Champions League final, losing to Bayern Munich.",
        type: "event"
      },
      {
        year: "2021",
        title: "Lionel Messi Arrives",
        description: "Signed the Argentine legend after his shock departure from Barcelona.",
        type: "player"
      }
    ]
  }
];
