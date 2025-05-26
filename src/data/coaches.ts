import { Coach } from '../types';

export const coaches: Coach[] = [
  // Manchester United Coaches
  {
    id: "erik-ten-hag",
    name: "Erik ten Hag",
    age: 54,
    nationality: "Netherlands",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dateOfBirth: "1970-02-02",
    placeOfBirth: "Haaksbergen, Netherlands",
    bio: "Erik ten Hag is a Dutch professional football manager who is the current manager of Manchester United.",
    longBio: "Erik ten Hag has built a reputation as one of Europe's most progressive coaches through his work at Ajax. Known for his tactical flexibility, emphasis on youth development, and attacking philosophy, he was appointed Manchester United manager in 2022 to rebuild the club.",
    careerSummary: "A modern coach known for developing young talent and implementing attacking, possession-based football.",
    style: "Possession-based attacking football with high pressing and positional play",
    philosophy: "I believe in proactive, attacking football where every player knows their role and we dominate through possession and pressing.",
    principles: [
      "High pressing and intensity",
      "Possession-based football", 
      "Positional play and tactical discipline",
      "Youth development and integration",
      "Adaptability and tactical flexibility"
    ],
    languages: ["Dutch", "English", "German"],
    formerPlayer: true,
    playingPosition: "Defender",
    current: true,
    contractUntil: "2025",
    stats: {
      gamesInCharge: 95,
      wins: 55,
      draws: 15,
      losses: 25
    },
    totalStats: {
      years: 15,
      winRate: 58,
      trophies: 7,
      clubs: 5,
      leagueTitles: 3,
      cupTitles: 4,
      internationalTitles: 0
    },
    clubs: [
      {
        clubId: "man-utd",
        clubName: "Manchester United",
        appointed: "2022",
        description: "Appointed to rebuild United and return them to competing for major trophies",
        trophies: 1,
        stats: {
          games: 95,
          wins: 55,
          draws: 15,
          losses: 25
        },
        achievements: [
          "2023 League Cup Winner",
          "2023 FA Cup Final",
          "Champions League Qualification"
        ]
      }
    ],
    preferredFormations: ["4-3-3", "4-2-3-1", "3-4-2-1"],
    adaptations: "Flexible tactical approach that adapts based on opposition strengths and weaknesses",
    tacticalApproach: "Emphasis on building from the back with quick transitions and high pressing",
    attackingApproach: "Fluid attacking movements with width and positional rotations in the final third",
    defensiveApproach: "High pressing with compact defensive shape and aggressive marking",
    attackingElements: [
      "Wide attacking play with inverted wingers",
      "Quick passing combinations in tight spaces", 
      "Overlapping fullbacks providing width",
      "False 9 movements from striker"
    ],
    defensiveElements: [
      "High defensive line with offside trap",
      "Coordinated pressing triggers",
      "Compact shape between the lines",
      "Quick defensive transitions"
    ],
    tacticalAttributes: [
      { name: "Tactical Knowledge", value: 88 },
      { name: "Game Management", value: 82 },
      { name: "Adaptability", value: 85 },
      { name: "Set Pieces", value: 80 }
    ],
    managementAttributes: [
      { name: "Man Management", value: 82 },
      { name: "Youth Development", value: 90 },
      { name: "Communication", value: 85 },
      { name: "Discipline", value: 88 }
    ],
    trophies: [
      {
        name: "League Cup",
        club: "Manchester United",
        season: "2022/23",
        competition: "League Cup"
      },
      {
        name: "Eredivisie",
        club: "Ajax",
        season: "2018/19",
        competition: "Dutch League"
      }
    ],
    individualAwards: [
      {
        name: "Eredivisie Manager of the Year",
        year: "2019",
        organization: "Dutch FA",
        description: "Recognized for leading Ajax to domestic and European success"
      }
    ]
  },
  {
    id: "jose-mourinho",
    name: "José Mourinho",
    age: 61,
    nationality: "Portugal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dateOfBirth: "1963-01-26",
    placeOfBirth: "Setúbal, Portugal",
    bio: "José Mourinho is a Portuguese manager and one of the most successful coaches in football history.",
    longBio: "José Mourinho is widely regarded as one of the greatest managers of all time. Known as 'The Special One', he has won league titles in four different countries and is famous for his tactical acumen, man-management skills, and charismatic personality.",
    careerSummary: "One of the most successful managers in history with titles across Europe's top leagues.",
    style: "Pragmatic, defensively solid football with effective counter-attacking",
    philosophy: "I adapt my philosophy to the players I have and the objectives of the club.",
    principles: [
      "Defensive solidity as foundation",
      "Effective transitions and counter-attacks",
      "Mental strength and winning mentality",
      "Tactical discipline and organization"
    ],
    languages: ["Portuguese", "English", "Spanish", "Italian", "French"],
    formerPlayer: false,
    current: false,
    stats: {
      gamesInCharge: 144,
      wins: 84,
      draws: 32,
      losses: 28
    },
    totalStats: {
      years: 23,
      winRate: 65,
      trophies: 26,
      clubs: 8,
      leagueTitles: 8,
      cupTitles: 10,
      internationalTitles: 8
    },
    clubs: [
      {
        clubId: "man-utd",
        clubName: "Manchester United",
        appointed: "2016",
        left: "2018",
        description: "Won Europa League and League Cup but relationship with club deteriorated",
        trophies: 3,
        stats: {
          games: 144,
          wins: 84,
          draws: 32,
          losses: 28
        },
        achievements: [
          "2017 Europa League Winner",
          "2017 League Cup Winner",
          "2017 Community Shield Winner"
        ]
      }
    ],
    preferredFormations: ["4-2-3-1", "3-5-2", "4-3-3"],
    adaptations: "Master of tactical adaptation based on opposition and game situation",
    tacticalApproach: "Pragmatic approach prioritizing defensive stability and effective transitions",
    attackingApproach: "Quick transitions and set pieces with clinical finishing",
    defensiveApproach: "Compact, organized defense with disciplined pressing",
    attackingElements: [
      "Quick counter-attacks",
      "Set piece specialization",
      "Clinical finishing in transition",
      "Width from fullbacks"
    ],
    defensiveElements: [
      "Deep defensive block",
      "Disciplined pressing",
      "Strong aerial defense",
      "Tactical fouling when necessary"
    ],
    tacticalAttributes: [
      { name: "Tactical Knowledge", value: 95 },
      { name: "Game Management", value: 98 },
      { name: "Adaptability", value: 92 },
      { name: "Set Pieces", value: 90 }
    ],
    managementAttributes: [
      { name: "Man Management", value: 85 },
      { name: "Mental Strength", value: 95 },
      { name: "Media Handling", value: 90 },
      { name: "Big Game Management", value: 98 }
    ],
    trophies: [
      {
        name: "Europa League",
        club: "Manchester United",
        season: "2016/17",
        competition: "UEFA Europa League"
      },
      {
        name: "League Cup",
        club: "Manchester United", 
        season: "2016/17",
        competition: "EFL Cup"
      }
    ],
    individualAwards: [
      {
        name: "FIFA World Coach of the Year",
        year: "2010",
        organization: "FIFA",
        description: "Recognized as the world's best coach"
      }
    ]
  },

  // Barcelona Coaches
  {
    id: "xavi-hernandez",
    name: "Xavi Hernández",
    age: 44,
    nationality: "Spain", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dateOfBirth: "1980-01-25",
    placeOfBirth: "Terrassa, Spain",
    bio: "Xavi Hernández is a Spanish manager and former Barcelona legend currently coaching the club.",
    longBio: "Xavi Hernández returned to Barcelona as head coach in 2021, bringing with him the DNA of the club as a former player. Known for his deep understanding of Barcelona's philosophy and his ability to develop young talent while maintaining the club's traditional style.",
    careerSummary: "A Barcelona legend transitioning into management with emphasis on the club's traditional values.",
    style: "Possession-based football with high pressing and technical excellence",
    philosophy: "Barcelona has a unique style that must be respected - possession, pressing, and playing beautiful football.",
    principles: [
      "Possession and ball circulation",
      "High pressing and intensity",
      "Technical excellence over physicality",
      "Youth development and La Masia integration",
      "Attacking, entertaining football"
    ],
    languages: ["Spanish", "Catalan", "English"],
    formerPlayer: true,
    playingPosition: "Midfielder",
    current: true,
    contractUntil: "2025",
    stats: {
      gamesInCharge: 125,
      wins: 78,
      draws: 25,
      losses: 22
    },
    totalStats: {
      years: 4,
      winRate: 62,
      trophies: 2,
      clubs: 2,
      leagueTitles: 1,
      cupTitles: 1,
      internationalTitles: 0
    },
    clubs: [
      {
        clubId: "barcelona",
        clubName: "FC Barcelona",
        appointed: "2021",
        description: "Returned to rebuild Barcelona and restore their traditional style",
        trophies: 2,
        stats: {
          games: 125,
          wins: 78,
          draws: 25,
          losses: 22
        },
        achievements: [
          "2023 La Liga Champion",
          "Youth integration and development",
          "Restoration of Barcelona identity"
        ]
      }
    ],
    preferredFormations: ["4-3-3", "3-4-3", "4-2-3-1"],
    adaptations: "Maintains Barcelona's core principles while adapting tactically for different opponents",
    tacticalApproach: "Possession-based buildup with high pressing and quick passing combinations",
    attackingApproach: "Fluid front three with midfield creativity and overlapping fullbacks", 
    defensiveApproach: "High pressing with quick recovery and possession regain",
    attackingElements: [
      "Intricate passing combinations",
      "Wide play with inverted wingers",
      "Midfield creativity and vision",
      "False 9 and positional rotations"
    ],
    defensiveElements: [
      "High defensive line",
      "Coordinated pressing",
      "Quick ball recovery",
      "Possession as defense"
    ],
    tacticalAttributes: [
      { name: "Tactical Knowledge", value: 85 },
      { name: "Possession Play", value: 95 },
      { name: "Youth Development", value: 90 },
      { name: "Barcelona Philosophy", value: 98 }
    ],
    managementAttributes: [
      { name: "Player Development", value: 88 },
      { name: "Club Understanding", value: 95 },
      { name: "Communication", value: 85 },
      { name: "Tactical Teaching", value: 90 }
    ],
    trophies: [
      {
        name: "La Liga",
        club: "FC Barcelona",
        season: "2022/23",
        competition: "Spanish League"
      }
    ],
    individualAwards: [
      {
        name: "La Liga Coach of the Month",
        year: "2023",
        organization: "La Liga",
        description: "Multiple monthly awards for excellent team performance"
      }
    ]
  },
  {
    id: "pep-guardiola",
    name: "Pep Guardiola",
    age: 53,
    nationality: "Spain",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dateOfBirth: "1971-01-18",
    placeOfBirth: "Santpedor, Spain",
    bio: "Pep Guardiola is widely considered one of the greatest football managers of all time.",
    longBio: "Pep Guardiola revolutionized football during his time at Barcelona, creating one of the greatest teams in history. His innovative tactical approach, emphasis on possession, and ability to develop players has influenced a generation of coaches.",
    careerSummary: "Revolutionary coach who redefined modern football and is considered one of the greatest ever.",
    style: "Possession-based, positional play with tactical innovation",
    philosophy: "Football is about keeping the ball and creating numerical advantages through positioning.",
    principles: [
      "Possession and ball circulation",
      "Positional play and spacing",
      "High pressing and ball recovery",
      "Tactical innovation and adaptation"
    ],
    languages: ["Spanish", "Catalan", "English", "German"],
    formerPlayer: true,
    playingPosition: "Midfielder",
    current: false,
    stats: {
      gamesInCharge: 247,
      wins: 179,
      draws: 32,
      losses: 36
    },
    totalStats: {
      years: 15,
      winRate: 72,
      trophies: 32,
      clubs: 4,
      leagueTitles: 11,
      cupTitles: 14,
      internationalTitles: 7
    },
    clubs: [
      {
        clubId: "barcelona",
        clubName: "FC Barcelona",
        appointed: "2008",
        left: "2012",
        description: "Created one of the greatest teams in football history",
        trophies: 14,
        stats: {
          games: 247,
          wins: 179,
          draws: 32,
          losses: 36
        },
        achievements: [
          "2009 Sextuple Winner",
          "2 Champions League titles",
          "3 La Liga titles",
          "Revolutionary tactical approach"
        ]
      }
    ],
    preferredFormations: ["4-3-3", "3-4-3", "4-2-3-1"],
    adaptations: "Constant tactical innovation while maintaining core philosophical principles",
    tacticalApproach: "Positional play with emphasis on creating numerical advantages",
    attackingApproach: "Intricate passing patterns with false 9 and positional rotations",
    defensiveApproach: "High pressing and quick ball recovery through coordinated pressure",
    attackingElements: [
      "Tiki-taka passing style",
      "False 9 and positional fluidity",
      "Overlapping fullbacks",
      "Central midfielder creativity"
    ],
    defensiveElements: [
      "High pressing coordination",
      "Offside trap execution", 
      "Quick ball recovery",
      "Possession as defense"
    ],
    tacticalAttributes: [
      { name: "Tactical Innovation", value: 98 },
      { name: "Positional Play", value: 95 },
      { name: "Game Reading", value: 92 },
      { name: "Player Development", value: 90 }
    ],
    managementAttributes: [
      { name: "Tactical Teaching", value: 95 },
      { name: "Player Motivation", value: 88 },
      { name: "Innovation", value: 98 },
      { name: "Perfectionism", value: 95 }
    ],
    trophies: [
      {
        name: "Champions League",
        club: "FC Barcelona",
        season: "2008/09",
        competition: "UEFA Champions League"
      },
      {
        name: "Champions League", 
        club: "FC Barcelona",
        season: "2010/11",
        competition: "UEFA Champions League"
      }
    ],
    individualAwards: [
      {
        name: "FIFA World Coach of the Year",
        year: "2011",
        organization: "FIFA",
        description: "Recognized for revolutionary coaching methods"
      }
    ]
  },

  // Real Madrid Coaches
  {
    id: "carlo-ancelotti",
    name: "Carlo Ancelotti",
    age: 64,
    nationality: "Italy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dateOfBirth: "1959-06-10",
    placeOfBirth: "Reggiolo, Italy",
    bio: "Carlo Ancelotti is an Italian manager and one of the most successful coaches in Champions League history.",
    longBio: "Carlo Ancelotti is the only manager to win the Champions League four times and has coached some of the world's biggest clubs. Known for his calm demeanor, man-management skills, and ability to handle star players, he returned to Real Madrid in 2021.",
    careerSummary: "One of the most experienced and successful managers in world football with titles across Europe.",
    style: "Flexible tactical approach with emphasis on player relationships and squad harmony",
    philosophy: "I believe in adapting to the players' characteristics and creating a positive environment.",
    principles: [
      "Player-focused management approach",
      "Tactical flexibility and adaptation",
      "Squad harmony and team spirit",
      "Experience in big matches"
    ],
    languages: ["Italian", "English", "Spanish", "French"],
    formerPlayer: true,
    playingPosition: "Midfielder",
    current: true,
    contractUntil: "2024",
    stats: {
      gamesInCharge: 185,
      wins: 125,
      draws: 35,
      losses: 25
    },
    totalStats: {
      years: 28,
      winRate: 68,
      trophies: 29,
      clubs: 9,
      leagueTitles: 4,
      cupTitles: 12,
      internationalTitles: 13
    },
    clubs: [
      {
        clubId: "real-madrid",
        clubName: "Real Madrid",
        appointed: "2021",
        description: "Returned to lead Real Madrid to more Champions League success",
        trophies: 6,
        stats: {
          games: 185,
          wins: 125,
          draws: 35,
          losses: 25
        },
        achievements: [
          "2022 Champions League Winner",
          "2022 La Liga Champion",
          "2022 Supercopa de España Winner"
        ]
      }
    ],
    preferredFormations: ["4-3-3", "4-4-2", "4-2-3-1"],
    adaptations: "Master of in-game adjustments and reading match situations",
    tacticalApproach: "Balanced approach with strong midfield control and clinical finishing",
    attackingApproach: "Direct attacking play with emphasis on wing play and crossing",
    defensiveApproach: "Organized defensive structure with experienced center-backs",
    attackingElements: [
      "Wing play and crossing",
      "Midfield creativity through the center",
      "Clinical finishing in the box",
      "Set piece expertise"
    ],
    defensiveElements: [
      "Experienced defensive leadership",
      "Disciplined defensive shape",
      "Counter-pressing after losing possession",
      "Tactical fouls in dangerous areas"
    ],
    tacticalAttributes: [
      { name: "Game Management", value: 95 },
      { name: "In-Game Adjustments", value: 92 },
      { name: "Big Match Experience", value: 98 },
      { name: "Tactical Flexibility", value: 88 }
    ],
    managementAttributes: [
      { name: "Player Relationships", value: 95 },
      { name: "Squad Harmony", value: 92 },
      { name: "Pressure Management", value: 90 },
      { name: "Star Player Management", value: 95 }
    ],
    trophies: [
      {
        name: "Champions League",
        club: "Real Madrid",
        season: "2021/22",
        competition: "UEFA Champions League"
      },
      {
        name: "La Liga",
        club: "Real Madrid",
        season: "2021/22",
        competition: "Spanish League"
      }
    ],
    individualAwards: [
      {
        name: "UEFA Coach of the Year",
        year: "2022",
        organization: "UEFA",
        description: "Recognized for Champions League success with Real Madrid"
      }
    ]
  },
  {
    id: "zinedine-zidane",
    name: "Zinedine Zidane",
    age: 51,
    nationality: "France",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dateOfBirth: "1972-06-23",
    placeOfBirth: "Marseille, France",
    bio: "Zinedine Zidane is a French manager and former player, legendary for his time as Real Madrid coach.",
    longBio: "Zinedine Zidane achieved unprecedented success as Real Madrid manager, winning three consecutive Champions League titles. His calm leadership, tactical intelligence, and connection with players made him one of the most successful managers in the club's history.",
    careerSummary: "Legendary former player who became equally successful as a manager, particularly in Europe.",
    style: "Pragmatic approach with emphasis on player management and big-game tactics",
    philosophy: "I focus on the human side of management and adapting tactics to get the best from players.",
    principles: [
      "Player trust and confidence building",
      "Tactical adaptation to opponent",
      "Mental preparation for big games",
      "Squad rotation and player management"
    ],
    languages: ["French", "Spanish", "Arabic"],
    formerPlayer: true,
    playingPosition: "Midfielder",
    current: false,
    stats: {
      gamesInCharge: 263,
      wins: 174,
      draws: 53,
      losses: 36
    },
    totalStats: {
      years: 5,
      winRate: 66,
      trophies: 11,
      clubs: 1,
      leagueTitles: 2,
      cupTitles: 3,
      internationalTitles: 6
    },
    clubs: [
      {
        clubId: "real-madrid",
        clubName: "Real Madrid",
        appointed: "2016",
        left: "2021",
        description: "Led Real Madrid to historic three consecutive Champions League titles",
        trophies: 11,
        stats: {
          games: 263,
          wins: 174,
          draws: 53,
          losses: 36
        },
        achievements: [
          "3 consecutive Champions League titles (2016-2018)",
          "2 La Liga titles",
          "Historic three-peat achievement"
        ]
      }
    ],
    preferredFormations: ["4-3-3", "4-4-2", "3-5-2"],
    adaptations: "Excellent at making tactical changes during matches and tournaments",
    tacticalApproach: "Flexible system that maximizes individual player strengths",
    attackingApproach: "Quick transitions and individual brilliance in the final third",
    defensiveApproach: "Solid defensive foundation with experienced center-backs",
    attackingElements: [
      "Individual player freedom",
      "Quick counter-attacks",
      "Width from fullbacks",
      "Set piece prowess"
    ],
    defensiveElements: [
      "Experienced defensive leadership",
      "Compact midfield structure",
      "Tactical discipline",
      "Strong goalkeeping"
    ],
    tacticalAttributes: [
      { name: "Big Game Management", value: 95 },
      { name: "Player Psychology", value: 92 },
      { name: "Tournament Football", value: 98 },
      { name: "Tactical Adaptation", value: 85 }
    ],
    managementAttributes: [
      { name: "Player Trust", value: 95 },
      { name: "Calm Leadership", value: 90 },
      { name: "Pressure Handling", value: 92 },
      { name: "Squad Rotation", value: 88 }
    ],
    trophies: [
      {
        name: "Champions League",
        club: "Real Madrid",
        season: "2015/16",
        competition: "UEFA Champions League"
      },
      {
        name: "Champions League",
        club: "Real Madrid",
        season: "2016/17",
        competition: "UEFA Champions League"
      },
      {
        name: "Champions League",
        club: "Real Madrid",
        season: "2017/18",
        competition: "UEFA Champions League"
      }
    ],
    individualAwards: [
      {
        name: "FIFA World Coach of the Year",
        year: "2017",
        organization: "FIFA",
        description: "Recognized for historic Champions League achievements"
      }
    ]
  },

  // Liverpool Coaches
  {
    id: "jurgen-klopp",
    name: "Jürgen Klopp",
    age: 56,
    nationality: "Germany",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dateOfBirth: "1967-06-16",
    placeOfBirth: "Stuttgart, Germany",
    bio: "Jürgen Klopp is a German manager who transformed Liverpool into one of the world's best teams.",
    longBio: "Jürgen Klopp has transformed Liverpool since his arrival in 2015, implementing his high-intensity 'gegenpressing' style and building a team capable of competing with the world's best. His charismatic leadership and tactical innovation have made him a fan favorite.",
    careerSummary: "A transformational manager who has restored Liverpool to the pinnacle of world football.",
    style: "High-intensity pressing with quick transitions and attacking fullbacks",
    philosophy: "We want to play with full throttle, with maximum intensity, and make the crowd happy.",
    principles: [
      "High-intensity pressing (gegenpressing)",
      "Quick transitions and counter-attacks",
      "Attacking fullbacks providing width",
      "Team unity and fighting spirit"
    ],
    languages: ["German", "English"],
    formerPlayer: true,
    playingPosition: "Defender",
    current: true,
    contractUntil: "2026",
    stats: {
      gamesInCharge: 425,
      wins: 265,
      draws: 95,
      losses: 65
    },
    totalStats: {
      years: 22,
      winRate: 62,
      trophies: 13,
      clubs: 3,
      leagueTitles: 3,
      cupTitles: 6,
      internationalTitles: 4
    },
    clubs: [
      {
        clubId: "liverpool",
        clubName: "Liverpool FC",
        appointed: "2015",
        description: "Transformed Liverpool and ended their trophy drought",
        trophies: 7,
        stats: {
          games: 425,
          wins: 265,
          draws: 95,
          losses: 65
        },
        achievements: [
          "2019 Champions League Winner",
          "2020 Premier League Champion (ended 30-year wait)",
          "2022 FA Cup and League Cup Winner"
        ]
      }
    ],
    preferredFormations: ["4-3-3", "4-2-3-1"],
    adaptations: "Adapts pressing triggers and intensity based on opponent and game situation",
    tacticalApproach: "High-intensity pressing with quick transitions and overlapping fullbacks",
    attackingApproach: "Wide attacking play with pace and direct running at goal",
    defensiveApproach: "High pressing and coordinated defensive line with quick recovery",
    attackingElements: [
      "Overlapping fullbacks providing width",
      "Pace and directness from wingers",
      "Quick passing combinations",
      "Set piece delivery"
    ],
    defensiveElements: [
      "Coordinated high pressing",
      "Quick ball recovery",
      "High defensive line",
      "Intensity and work rate"
    ],
    tacticalAttributes: [
      { name: "Gegenpressing", value: 98 },
      { name: "Motivational Skills", value: 95 },
      { name: "Game Intensity", value: 92 },
      { name: "Tactical Innovation", value: 85 }
    ],
    managementAttributes: [
      { name: "Player Motivation", value: 98 },
      { name: "Team Building", value: 92 },
      { name: "Charismatic Leadership", value: 95 },
      { name: "Media Relations", value: 88 }
    ],
    trophies: [
      {
        name: "Champions League",
        club: "Liverpool FC",
        season: "2018/19",
        competition: "UEFA Champions League"
      },
      {
        name: "Premier League",
        club: "Liverpool FC",
        season: "2019/20",
        competition: "English Premier League"
      }
    ],
    individualAwards: [
      {
        name: "FIFA World Coach of the Year",
        year: "2020",
        organization: "FIFA",
        description: "Recognized for leading Liverpool to Premier League success"
      }
    ]
  },

  // PSG Coaches
  {
    id: "luis-enrique",
    name: "Luis Enrique",
    age: 53,
    nationality: "Spain",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dateOfBirth: "1970-05-08",
    placeOfBirth: "Gijón, Spain",
    bio: "Luis Enrique is a Spanish manager known for his attacking philosophy and success with Barcelona.",
    longBio: "Luis Enrique is a former Barcelona player and coach who led the club to their second treble in 2015. Known for his attacking philosophy, youth development, and strong personality, he was appointed PSG manager in 2023 to finally deliver Champions League success.",
    careerSummary: "An attacking-minded coach with experience at the highest level and success with Barcelona.",
    style: "Attacking, possession-based football with high pressing and intensity",
    philosophy: "I believe in attacking football, taking risks, and always trying to score one more goal than the opponent.",
    principles: [
      "Attacking, proactive football",
      "High pressing and intensity",
      "Possession with purpose",
      "Youth integration and development"
    ],
    languages: ["Spanish", "English", "French"],
    formerPlayer: true,
    playingPosition: "Midfielder",
    current: true,
    contractUntil: "2025",
    stats: {
      gamesInCharge: 45,
      wins: 32,
      draws: 8,
      losses: 5
    },
    totalStats: {
      years: 12,
      winRate: 71,
      trophies: 12,
      clubs: 4,
      leagueTitles: 3,
      cupTitles: 6,
      internationalTitles: 3
    },
    clubs: [
      {
        clubId: "psg",
        clubName: "Paris Saint-Germain",
        appointed: "2023",
        description: "Brought in to finally deliver Champions League success to PSG",
        trophies: 0,
        stats: {
          games: 45,
          wins: 32,
          draws: 8,
          losses: 5
        },
        achievements: [
          "Strong start to PSG tenure",
          "Improved tactical discipline",
          "Youth integration"
        ]
      }
    ],
    preferredFormations: ["4-3-3", "3-4-3", "4-2-3-1"],
    adaptations: "Flexible tactical approach while maintaining attacking principles",
    tacticalApproach: "Possession-based buildup with high pressing and quick transitions",
    attackingApproach: "Direct attacking play with pace and creativity in wide areas",
    defensiveApproach: "High pressing with quick ball recovery and defensive transitions",
    attackingElements: [
      "Wide attacking play",
      "Quick passing combinations",
      "Direct running at goal",
      "Creative freedom for attackers"
    ],
    defensiveElements: [
      "High pressing coordination",
      "Quick defensive transitions",
      "Compact defensive shape",
      "Aggressive ball winning"
    ],
    tacticalAttributes: [
      { name: "Attacking Philosophy", value: 90 },
      { name: "Youth Development", value: 85 },
      { name: "Tactical Flexibility", value: 82 },
      { name: "High Pressing", value: 88 }
    ],
    managementAttributes: [
      { name: "Strong Personality", value: 90 },
      { name: "Player Development", value: 85 },
      { name: "Tactical Teaching", value: 88 },
      { name: "Attacking Mindset", value: 92 }
    ],
    trophies: [
      {
        name: "Champions League",
        club: "FC Barcelona",
        season: "2014/15",
        competition: "UEFA Champions League"
      }
    ],
    individualAwards: [
      {
        name: "UEFA Coach of the Year",
        year: "2015",
        organization: "UEFA",
        description: "Recognized for treble success with Barcelona"
      }
    ]
  }
];

export default coaches;
