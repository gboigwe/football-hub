import { Coach } from '../types';

export const coaches: Coach[] = [
  {
    id: "erik-ten-hag",
    name: "Erik ten Hag",
    age: 54,
    nationality: "Netherlands",
    image: "https://images.pexels.com/photos/9750343/pexels-photo-9750343.jpeg",
    dateOfBirth: "1970-02-02",
    placeOfBirth: "Haaksbergen, Netherlands",
    bio: "Erik ten Hag is a Dutch professional football manager who is the current manager of Manchester United.",
    style: "Possession-based attacking football with high pressing",
    philosophy: "Technical, possession-based football with emphasis on positional play",
    principles: ["High pressing", "Possession football", "Positional play"],
    languages: ["Dutch", "English", "German"],
    formerPlayer: true,
    playingPosition: "Defender",
    current: true,
    contractUntil: "2025",
    stats: {
      gamesInCharge: 89,
      wins: 55,
      draws: 12,
      losses: 22
    },
    totalStats: {
      years: 13,
      winRate: 61.8,
      trophies: 5,
      clubs: 4,
      leagueTitles: 3,
      cupTitles: 2,
      internationalTitles: 0
    },
    clubs: [
      {
        clubId: "man-utd",
        clubName: "Manchester United",
        appointed: "2022",
        description: "First season saw improvement in team performance",
        trophies: 1,
        stats: {
          games: 89,
          wins: 55,
          draws: 12,
          losses: 22
        },
        achievements: ["2023 League Cup Winner"]
      }
    ],
    preferredFormations: ["4-3-3", "4-2-3-1"],
    adaptations: "Flexible tactical approach based on opposition",
    tacticalApproach: "Emphasis on building from the back with quick transitions",
    attackingApproach: "Fluid attacking movements with emphasis on width",
    defensiveApproach: "High pressing with compact defensive shape",
    attackingElements: ["Width in attack", "Quick transitions", "Positional rotations"],
    defensiveElements: ["High press", "Compact shape", "Aggressive marking"],
    tacticalAttributes: [
      { name: "Tactical Knowledge", value: 85 },
      { name: "Game Management", value: 82 }
    ],
    managementAttributes: [
      { name: "Man Management", value: 80 },
      { name: "Youth Development", value: 85 }
    ],
    trophies: [
      {
        name: "League Cup",
        club: "Manchester United",
        season: "2022/23",
        competition: "League Cup"
      }
    ],
    individualAwards: [
      {
        name: "Eredivisie Manager of the Year",
        year: "2019",
        organization: "Dutch FA",
        description: "Award for best manager in Dutch top flight"
      }
    ]
  }
];