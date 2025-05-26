import { Player } from '../types';

export const allPlayers: Player[] = [
  {
    id: "marcus-rashford",
    name: "Marcus Rashford",
    age: 26,
    nationality: "England",
    position: "Forward",
    number: 10,
    image: "https://images.pexels.com/photos/9750343/pexels-photo-9750343.jpeg",
    clubId: "man-utd",
    clubName: "Manchester United",
    clubLogo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    dateOfBirth: "1997-10-31",
    placeOfBirth: "Manchester, England",
    height: 180,
    weight: 70,
    preferredFoot: "Right",
    bio: "Marcus Rashford is an English professional footballer who plays as a forward for Manchester United.",
    joinedClub: "2015",
    contractUntil: "2028",
    marketValue: "€80M",
    stats: {
      appearances: 250,
      goals: 125,
      assists: 45
    },
    strengths: ["Pace", "Dribbling", "Finishing"],
    weaknesses: ["Aerial Duels", "Defensive Contribution"],
    detailedStats: {
      shotAccuracy: 65,
      passAccuracy: 78,
      dribbleSuccess: 72
    },
    currentSeason: {
      appearances: 27,
      goals: 8,
      assists: 6,
      minutesPlayed: 2430
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "Manchester United",
        competition: "Premier League",
        appearances: 27,
        goals: 8,
        assists: 6,
        minutes: 2430,
        rating: 7.2
      }
    ],
    careerPath: [
      {
        period: "2015-Present",
        club: "Manchester United",
        clubLogo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        description: "First team breakthrough and establishment as key player",
        stats: {
          appearances: 250,
          goals: 125,
          assists: 45,
          trophies: 4
        }
      }
    ],
    achievements: [
      {
        title: "FA Cup Winner",
        year: "2016",
        description: "Won his first major trophy with Manchester United"
      }
    ],
    analysis: {
      technical: "Excellent technical ability with great close control.",
      tactical: "Intelligent movement and positioning in attacking phases.",
      physical: "Outstanding pace and acceleration.",
      mental: "Strong mentality and leadership qualities.",
      technicalAttributes: [
        { name: "Ball Control", value: 85 },
        { name: "Dribbling", value: 88 }
      ],
      tacticalAttributes: [
        { name: "Positioning", value: 82 },
        { name: "Movement", value: 86 }
      ],
      physicalAttributes: [
        { name: "Speed", value: 90 },
        { name: "Stamina", value: 85 }
      ],
      mentalAttributes: [
        { name: "Leadership", value: 80 },
        { name: "Determination", value: 88 }
      ]
    }
  }
];

export const popularPlayers = allPlayers.slice(0, 5);
