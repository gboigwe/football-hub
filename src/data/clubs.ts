import { Club } from '../types';

export const topClubs: Club[] = [
  {
    id: "man-utd",
    name: "Manchester United",
    fullName: "Manchester United Football Club",
    country: "England",
    established: 1878,
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    stadiumImage: "https://images.pexels.com/photos/9750343/pexels-photo-9750343.jpeg",
    stadium: "Old Trafford",
    stadiumCapacity: 74140,
    nickname: "The Red Devils",
    location: "Manchester, England",
    website: "https://www.manutd.com",
    league: "Premier League",
    currentManager: "Erik ten Hag",
    description: "Manchester United is one of the most successful and widely supported football clubs in the world.",
    history: "Founded as Newton Heath LYR Football Club in 1878, the club has won 20 league titles, 12 FA Cups, and 3 UEFA Champions League titles.",
    players: [], // Will be populated with player IDs
    trophies: {
      total: 66,
      major: 42,
      minor: 24
    },
    statistics: {
      leagueTitles: 20,
      europeanTitles: 3,
      domesticCups: 12,
      worldTitles: 2
    },
    currentSeason: {
      position: 6,
      played: 27,
      won: 14,
      drawn: 4,
      lost: 9,
      goalsFor: 39,
      goalsAgainst: 36,
      points: 46
    },
    timeline: [
      {
        year: "2008",
        title: "UEFA Champions League Victory",
        description: "Won the Champions League final against Chelsea in Moscow",
        type: "trophy",
        image: "https://images.pexels.com/photos/9750343/pexels-photo-9750343.jpeg"
      }
    ]
  }
];