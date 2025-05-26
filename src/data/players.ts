import { Player } from '../types';

export const allPlayers: Player[] = [
  // Manchester United Players
  {
    id: "marcus-rashford",
    name: "Marcus Rashford",
    age: 26,
    nationality: "England",
    position: "Forward",
    number: 10,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    clubId: "man-utd",
    clubName: "Manchester United",
    clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png",
    dateOfBirth: "1997-10-31",
    placeOfBirth: "Manchester, England",
    height: 180,
    weight: 70,
    preferredFoot: "Right",
    bio: "Marcus Rashford is an English professional footballer who plays as a forward for Manchester United and the England national team.",
    longBio: "Marcus Rashford MBE is a product of Manchester United's youth academy who burst onto the scene in 2016. Known for his pace, direct running, and clinical finishing, Rashford has become one of the Premier League's most dangerous forwards. Off the pitch, he's equally impressive, campaigning against child food poverty and earning an MBE for his community work.",
    careerSummary: "Rashford has established himself as one of England's premier forwards, combining pace and power with improving technical ability.",
    playingStyle: "A pacey, direct forward who excels at running in behind defenses and cutting in from wide positions.",
    joinedClub: "2015",
    contractUntil: "2028",
    marketValue: "€80M",
    stats: {
      appearances: 350,
      goals: 125,
      assists: 65
    },
    strengths: ["Pace", "Direct Running", "Clinical Finishing", "Set Pieces"],
    weaknesses: ["Consistency", "Physical Duels", "Link-up Play"],
    detailedStats: {
      shotAccuracy: 65,
      passAccuracy: 78,
      dribbleSuccess: 72,
      aerialDuels: 45,
      tackles: 32
    },
    currentSeason: {
      appearances: 25,
      goals: 8,
      assists: 4,
      minutesPlayed: 2250
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "Manchester United",
        competition: "Premier League",
        appearances: 25,
        goals: 8,
        assists: 4,
        minutes: 2250,
        rating: 7.1
      }
    ],
    careerPath: [
      {
        period: "2015-Present",
        club: "Manchester United",
        clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png",
        description: "Academy graduate who made his breakthrough and became a key player",
        stats: {
          appearances: 350,
          goals: 125,
          assists: 65,
          trophies: 4
        }
      }
    ],
    achievements: [
      {
        title: "FA Cup Winner",
        year: "2016",
        description: "Won his first major trophy with Manchester United aged 18"
      },
      {
        title: "MBE",
        year: "2021",
        description: "Awarded MBE for services to vulnerable children during COVID-19"
      }
    ],
    analysis: {
      technical: "Good technical ability with improving first touch and ball control.",
      tactical: "Intelligent movement and positioning, particularly when running in behind.",
      physical: "Outstanding pace and acceleration, good stamina but needs to improve aerial ability.",
      mental: "Strong mentality and leadership qualities, excellent work ethic.",
      technicalAttributes: [
        { name: "Ball Control", value: 82 },
        { name: "Dribbling", value: 85 },
        { name: "Shooting", value: 88 },
        { name: "Passing", value: 78 }
      ],
      tacticalAttributes: [
        { name: "Positioning", value: 84 },
        { name: "Movement", value: 87 },
        { name: "Decision Making", value: 80 }
      ],
      physicalAttributes: [
        { name: "Speed", value: 92 },
        { name: "Acceleration", value: 90 },
        { name: "Stamina", value: 85 },
        { name: "Strength", value: 78 }
      ],
      mentalAttributes: [
        { name: "Leadership", value: 85 },
        { name: "Determination", value: 90 },
        { name: "Composure", value: 82 }
      ]
    }
  },
  {
    id: "bruno-fernandes",
    name: "Bruno Fernandes",
    age: 29,
    nationality: "Portugal",
    position: "Midfielder",
    number: 18,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    clubId: "man-utd",
    clubName: "Manchester United",
    clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png",
    dateOfBirth: "1994-09-08",
    placeOfBirth: "Maia, Portugal",
    height: 179,
    weight: 70,
    preferredFoot: "Right",
    bio: "Bruno Fernandes is a Portuguese midfielder known for his creativity, passing range, and penalty-taking ability.",
    longBio: "Bruno Fernandes transformed Manchester United's midfield upon his arrival in 2020. The Portuguese playmaker is renowned for his exceptional passing range, set-piece delivery, and ability to score goals from midfield. His leadership qualities and winning mentality have made him captain of both club and country.",
    careerSummary: "A creative midfielder who has become one of the Premier League's most influential players since joining from Sporting CP.",
    playingStyle: "An attacking midfielder who excels at through balls, long-range passing, and scoring from distance.",
    joinedClub: "2020",
    contractUntil: "2026",
    marketValue: "€85M",
    stats: {
      appearances: 180,
      goals: 65,
      assists: 55
    },
    strengths: ["Passing Range", "Set Pieces", "Penalty Taking", "Vision"],
    weaknesses: ["Defensive Work", "Consistency", "Ball Retention"],
    detailedStats: {
      shotAccuracy: 58,
      passAccuracy: 85,
      dribbleSuccess: 68,
      aerialDuels: 52,
      tackles: 65
    },
    currentSeason: {
      appearances: 25,
      goals: 8,
      assists: 10,
      minutesPlayed: 2350
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "Manchester United",
        competition: "Premier League",
        appearances: 25,
        goals: 8,
        assists: 10,
        minutes: 2350,
        rating: 7.4
      }
    ],
    careerPath: [
      {
        period: "2020-Present",
        club: "Manchester United",
        clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png",
        description: "Transformed United's midfield and became captain",
        stats: {
          appearances: 180,
          goals: 65,
          assists: 55,
          trophies: 2
        }
      }
    ],
    achievements: [
      {
        title: "Premier League Player of the Month",
        year: "2020",
        description: "Won multiple Player of the Month awards in debut season"
      }
    ],
    analysis: {
      technical: "Exceptional passing technique and excellent first touch.",
      tactical: "Excellent vision and understanding of space in the final third.",
      physical: "Good stamina but lacks pace and physical strength.",
      mental: "Natural leader with excellent composure under pressure.",
      technicalAttributes: [
        { name: "Passing", value: 92 },
        { name: "Shooting", value: 85 },
        { name: "Free Kicks", value: 90 },
        { name: "Vision", value: 95 }
      ],
      tacticalAttributes: [
        { name: "Positioning", value: 88 },
        { name: "Decision Making", value: 85 },
        { name: "Creativity", value: 93 }
      ],
      physicalAttributes: [
        { name: "Speed", value: 68 },
        { name: "Stamina", value: 82 },
        { name: "Strength", value: 70 }
      ],
      mentalAttributes: [
        { name: "Leadership", value: 90 },
        { name: "Composure", value: 88 },
        { name: "Determination", value: 85 }
      ]
    }
  },

  // Barcelona Players
  {
    id: "robert-lewandowski",
    name: "Robert Lewandowski",
    age: 35,
    nationality: "Poland",
    position: "Forward",
    number: 9,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    clubId: "barcelona",
    clubName: "FC Barcelona",
    clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
    dateOfBirth: "1988-08-21",
    placeOfBirth: "Warsaw, Poland",
    height: 184,
    weight: 81,
    preferredFoot: "Right",
    bio: "Robert Lewandowski is a Polish striker widely regarded as one of the best forwards of his generation.",
    longBio: "Robert Lewandowski is a prolific striker who has consistently been among Europe's top goalscorers. Known for his clinical finishing, intelligent movement, and professionalism, he joined Barcelona in 2022 to continue his illustrious career in La Liga after dominating the Bundesliga.",
    careerSummary: "One of the most prolific strikers in football history with an incredible goal-scoring record across multiple leagues.",
    playingStyle: "A clinical finisher with excellent positioning and the ability to score with both feet and his head.",
    joinedClub: "2022",
    contractUntil: "2026",
    marketValue: "€20M",
    stats: {
      appearances: 75,
      goals: 65,
      assists: 15
    },
    strengths: ["Clinical Finishing", "Positioning", "Aerial Ability", "Professionalism"],
    weaknesses: ["Pace", "Age", "Dribbling"],
    detailedStats: {
      shotAccuracy: 82,
      passAccuracy: 75,
      dribbleSuccess: 65,
      aerialDuels: 78,
      tackles: 25
    },
    currentSeason: {
      appearances: 25,
      goals: 22,
      assists: 5,
      minutesPlayed: 2200
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "FC Barcelona",
        competition: "La Liga",
        appearances: 25,
        goals: 22,
        assists: 5,
        minutes: 2200,
        rating: 8.2
      }
    ],
    careerPath: [
      {
        period: "2022-Present",
        club: "FC Barcelona",
        clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
        description: "Joined Barcelona to lead their new era of football",
        stats: {
          appearances: 75,
          goals: 65,
          assists: 15,
          trophies: 1
        }
      }
    ],
    achievements: [
      {
        title: "UEFA Men's Player of the Year",
        year: "2020",
        description: "Recognized as Europe's best player"
      }
    ],
    analysis: {
      technical: "Exceptional finishing technique with both feet and head.",
      tactical: "Intelligent movement and positioning in the penalty area.",
      physical: "Strong in the air and good upper body strength.",
      mental: "Incredible professionalism and winning mentality.",
      technicalAttributes: [
        { name: "Finishing", value: 95 },
        { name: "Positioning", value: 93 },
        { name: "Heading", value: 90 }
      ],
      tacticalAttributes: [
        { name: "Movement", value: 92 },
        { name: "Decision Making", value: 88 }
      ],
      physicalAttributes: [
        { name: "Strength", value: 85 },
        { name: "Speed", value: 65 },
        { name: "Stamina", value: 80 }
      ],
      mentalAttributes: [
        { name: "Composure", value: 95 },
        { name: "Determination", value: 92 }
      ]
    }
  },
  {
    id: "pedri",
    name: "Pedri",
    age: 21,
    nationality: "Spain",
    position: "Midfielder",
    number: 8,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    clubId: "barcelona",
    clubName: "FC Barcelona", 
    clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
    dateOfBirth: "2002-11-25",
    placeOfBirth: "Tegueste, Spain",
    height: 174,
    weight: 60,
    preferredFoot: "Right",
    bio: "Pedri is a Spanish midfielder considered one of the brightest talents in world football.",
    longBio: "Pedro González López, known as Pedri, is a Spanish central midfielder who has taken the football world by storm. His technical ability, vision, and maturity beyond his years have drawn comparisons to Barcelona legends. He's already a key player for both club and country.",
    careerSummary: "A prodigious talent who has already established himself as one of Europe's premier young midfielders.",
    playingStyle: "A technically gifted midfielder with excellent dribbling, passing, and spatial awareness.",
    joinedClub: "2020",
    contractUntil: "2026",
    marketValue: "€100M",
    stats: {
      appearances: 150,
      goals: 18,
      assists: 25
    },
    strengths: ["Technical Ability", "Vision", "Dribbling", "Ball Retention"],
    weaknesses: ["Physical Strength", "Aerial Duels", "Finishing"],
    detailedStats: {
      shotAccuracy: 55,
      passAccuracy: 92,
      dribbleSuccess: 85,
      aerialDuels: 35,
      tackles: 58
    },
    currentSeason: {
      appearances: 20,
      goals: 3,
      assists: 6,
      minutesPlayed: 1800
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "FC Barcelona",
        competition: "La Liga",
        appearances: 20,
        goals: 3,
        assists: 6,
        minutes: 1800,
        rating: 7.8
      }
    ],
    careerPath: [
      {
        period: "2020-Present",
        club: "FC Barcelona",
        clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png",
        description: "Rising star who became a key player immediately",
        stats: {
          appearances: 150,
          goals: 18,
          assists: 25,
          trophies: 2
        }
      }
    ],
    achievements: [
      {
        title: "Golden Boy Award",
        year: "2021",
        description: "Won the prestigious award for best young player in Europe"
      }
    ],
    analysis: {
      technical: "Exceptional ball control and passing ability for his age.",
      tactical: "Excellent understanding of space and positioning.",
      physical: "Needs to develop physical strength and aerial ability.",
      mental: "Remarkable composure and maturity for a young player.",
      technicalAttributes: [
        { name: "Dribbling", value: 88 },
        { name: "Passing", value: 90 },
        { name: "Ball Control", value: 92 }
      ],
      tacticalAttributes: [
        { name: "Vision", value: 85 },
        { name: "Positioning", value: 82 }
      ],
      physicalAttributes: [
        { name: "Speed", value: 75 },
        { name: "Strength", value: 60 },
        { name: "Stamina", value: 78 }
      ],
      mentalAttributes: [
        { name: "Composure", value: 88 },
        { name: "Determination", value: 85 }
      ]
    }
  },

  // Real Madrid Players
  {
    id: "vinicius-junior",
    name: "Vinícius Jr.",
    age: 23,
    nationality: "Brazil",
    position: "Forward",
    number: 7,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    clubId: "real-madrid",
    clubName: "Real Madrid",
    clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png",
    dateOfBirth: "2000-07-12",
    placeOfBirth: "São Gonçalo, Brazil",
    height: 176,
    weight: 73,
    preferredFoot: "Right",
    bio: "Vinícius Jr. is a Brazilian winger known for his pace, dribbling ability, and match-winning performances.",
    longBio: "Vinícius José Paixão de Oliveira Júnior is a Brazilian winger who has developed into one of the world's most exciting attacking players. His pace, skill, and ability to perform in big moments have made him a key player for Real Madrid and Brazil.",
    careerSummary: "A dynamic winger who has evolved from a promising talent to one of the world's best attacking players.",
    playingStyle: "An explosive winger with incredible pace, excellent dribbling skills, and improving end product.",
    joinedClub: "2018",
    contractUntil: "2027",
    marketValue: "€120M",
    stats: {
      appearances: 220,
      goals: 65,
      assists: 55
    },
    strengths: ["Pace", "Dribbling", "Big Game Performances", "Direct Running"],
    weaknesses: ["Consistency", "Finishing", "Decision Making"],
    detailedStats: {
      shotAccuracy: 68,
      passAccuracy: 80,
      dribbleSuccess: 78,
      aerialDuels: 45,
      tackles: 35
    },
    currentSeason: {
      appearances: 25,
      goals: 15,
      assists: 8,
      minutesPlayed: 2100
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "Real Madrid",
        competition: "La Liga",
        appearances: 25,
        goals: 15,
        assists: 8,
        minutes: 2100,
        rating: 8.0
      }
    ],
    careerPath: [
      {
        period: "2018-Present",
        club: "Real Madrid",
        clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png",
        description: "Developed from promising teenager to world-class winger",
        stats: {
          appearances: 220,
          goals: 65,
          assists: 55,
          trophies: 8
        }
      }
    ],
    achievements: [
      {
        title: "Champions League Winner",
        year: "2022",
        description: "Scored crucial goal in Champions League final"
      }
    ],
    analysis: {
      technical: "Excellent dribbling ability and improving finishing technique.",
      tactical: "Good understanding of when to track back and when to attack.",
      physical: "Outstanding pace and acceleration with good balance.",
      mental: "Strong mentality in big games and growing maturity.",
      technicalAttributes: [
        { name: "Dribbling", value: 92 },
        { name: "Pace", value: 95 },
        { name: "Ball Control", value: 85 }
      ],
      tacticalAttributes: [
        { name: "Positioning", value: 80 },
        { name: "Movement", value: 85 }
      ],
      physicalAttributes: [
        { name: "Speed", value: 95 },
        { name: "Acceleration", value: 93 },
        { name: "Agility", value: 90 }
      ],
      mentalAttributes: [
        { name: "Composure", value: 82 },
        { name: "Determination", value: 88 }
      ]
    }
  },
  {
    id: "luka-modric",
    name: "Luka Modrić",
    age: 38,
    nationality: "Croatia",
    position: "Midfielder",
    number: 10,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    clubId: "real-madrid",
    clubName: "Real Madrid",
    clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png",
    dateOfBirth: "1985-09-09",
    placeOfBirth: "Zadar, Croatia",
    height: 172,
    weight: 66,
    preferredFoot: "Right",
    bio: "Luka Modrić is a Croatian midfielder and Ballon d'Or winner known for his exceptional passing and game intelligence.",
    longBio: "Luka Modrić is one of the greatest midfielders of all time. The Croatian maestro won the Ballon d'Or in 2018, breaking the Messi-Ronaldo duopoly. His vision, passing range, and ability to control the tempo of games have been crucial to Real Madrid's success.",
    careerSummary: "A legendary midfielder who has won everything in football and continues to perform at the highest level.",
    playingStyle: "A deep-lying playmaker with exceptional passing range, vision, and ability to dictate tempo.",
    joinedClub: "2012",
    contractUntil: "2024",
    marketValue: "€10M",
    stats: {
      appearances: 480,
      goals: 38,
      assists: 85
    },
    strengths: ["Passing Range", "Vision", "Game Intelligence", "Longevity"],
    weaknesses: ["Physical Strength", "Pace", "Age"],
    detailedStats: {
      shotAccuracy: 60,
      passAccuracy: 91,
      dribbleSuccess: 75,
      aerialDuels: 40,
      tackles: 68
    },
    currentSeason: {
      appearances: 20,
      goals: 2,
      assists: 6,
      minutesPlayed: 1600
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "Real Madrid",
        competition: "La Liga",
        appearances: 20,
        goals: 2,
        assists: 6,
        minutes: 1600,
        rating: 7.5
      }
    ],
    careerPath: [
      {
        period: "2012-Present",
        club: "Real Madrid",
        clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png",
        description: "Became a legend and one of the greatest midfielders ever",
        stats: {
          appearances: 480,
          goals: 38,
          assists: 85,
          trophies: 22
        }
      }
    ],
    achievements: [
      {
        title: "Ballon d'Or Winner",
        year: "2018",
        description: "Won the prestigious individual award"
      }
    ],
    analysis: {
      technical: "World-class passing technique and excellent first touch.",
      tactical: "Exceptional game intelligence and understanding of positioning.",
      physical: "Remarkable longevity despite lack of pace and physical strength.",
      mental: "Outstanding leadership and big-game mentality.",
      technicalAttributes: [
        { name: "Passing", value: 95 },
        { name: "Vision", value: 95 },
        { name: "Ball Control", value: 90 }
      ],
      tacticalAttributes: [
        { name: "Game Intelligence", value: 98 },
        { name: "Positioning", value: 92 }
      ],
      physicalAttributes: [
        { name: "Speed", value: 60 },
        { name: "Stamina", value: 85 },
        { name: "Strength", value: 65 }
      ],
      mentalAttributes: [
        { name: "Leadership", value: 95 },
        { name: "Composure", value: 95 }
      ]
    }
  },

  // Liverpool Players
  {
    id: "mohamed-salah",
    name: "Mohamed Salah",
    age: 31,
    nationality: "Egypt",
    position: "Forward",
    number: 11,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    clubId: "liverpool",
    clubName: "Liverpool FC",
    clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
    dateOfBirth: "1992-06-15",
    placeOfBirth: "Nagrig, Egypt",
    height: 175,
    weight: 71,
    preferredFoot: "Left",
    bio: "Mohamed Salah is an Egyptian forward and one of the Premier League's most prolific goalscorers.",
    longBio: "Mohamed Salah has established himself as one of the world's elite forwards since joining Liverpool. The Egyptian King's pace, finishing ability, and consistency have made him a modern legend at Anfield and an icon across the Arab world.",
    careerSummary: "A prolific goalscorer who has become Liverpool's talisman and one of the Premier League's greatest players.",
    playingStyle: "A pacey winger/forward with excellent finishing, particularly cutting in from the right wing.",
    joinedClub: "2017",
    contractUntil: "2025",
    marketValue: "€65M",
    stats: {
      appearances: 300,
      goals: 210,
      assists: 85
    },
    strengths: ["Pace", "Finishing", "Left Foot", "Consistency"],
    weaknesses: ["Physicality", "Passing Range", "Defensive Work"],
    detailedStats: {
      shotAccuracy: 75,
      passAccuracy: 82,
      dribbleSuccess: 70,
      aerialDuels: 35,
      tackles: 28
    },
    currentSeason: {
      appearances: 25,
      goals: 18,
      assists: 8,
      minutesPlayed: 2250
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "Liverpool FC",
        competition: "Premier League",
        appearances: 25,
        goals: 18,
        assists: 8,
        minutes: 2250,
        rating: 8.1
      }
    ],
    careerPath: [
      {
        period: "2017-Present",
        club: "Liverpool FC",
        clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
        description: "Became a Liverpool legend and Premier League icon",
        stats: {
          appearances: 300,
          goals: 210,
          assists: 85,
          trophies: 6
        }
      }
    ],
    achievements: [
      {
        title: "Premier League Golden Boot",
        year: "2018",
        description: "Set new Premier League record with 32 goals"
      }
    ],
    analysis: {
      technical: "Excellent finishing technique, particularly with his left foot.",
      tactical: "Great movement and positioning in the final third.",
      physical: "Good pace and acceleration with excellent balance.",
      mental: "Strong mentality and ability to perform in big moments.",
      technicalAttributes: [
        { name: "Finishing", value: 92 },
        { name: "Dribbling", value: 85 },
        { name: "Ball Control", value: 88 }
      ],
      tacticalAttributes: [
        { name: "Positioning", value: 90 },
        { name: "Movement", value: 88 }
      ],
      physicalAttributes: [
        { name: "Speed", value: 88 },
        { name: "Acceleration", value: 90 },
        { name: "Stamina", value: 85 }
      ],
      mentalAttributes: [
        { name: "Composure", value: 90 },
        { name: "Determination", value: 88 }
      ]
    }
  },
  {
    id: "virgil-van-dijk",
    name: "Virgil van Dijk",
    age: 32,
    nationality: "Netherlands",
    position: "Defender",
    number: 4,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    clubId: "liverpool",
    clubName: "Liverpool FC",
    clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
    dateOfBirth: "1991-07-08",
    placeOfBirth: "Breda, Netherlands",
    height: 193,
    weight: 92,
    preferredFoot: "Right",
    bio: "Virgil van Dijk is a Dutch centre-back widely regarded as one of the best defenders in the world.",
    longBio: "Virgil van Dijk transformed Liverpool's defense upon his arrival and has been instrumental in their recent success. The Dutch captain combines physical presence with excellent ball-playing ability and leadership qualities.",
    careerSummary: "One of the world's premier centre-backs who has been crucial to Liverpool's recent trophy success.",
    playingStyle: "A commanding centre-back with excellent aerial ability, pace, and distribution from the back.",
    joinedClub: "2018",
    contractUntil: "2025",
    marketValue: "€45M",
    stats: {
      appearances: 230,
      goals: 20,
      assists: 15
    },
    strengths: ["Aerial Duels", "Leadership", "Pace for CB", "Ball Playing"],
    weaknesses: ["Injury History", "Age", "Consistency"],
    detailedStats: {
      shotAccuracy: 55,
      passAccuracy: 89,
      dribbleSuccess: 70,
      aerialDuels: 85,
      tackles: 78
    },
    currentSeason: {
      appearances: 22,
      goals: 2,
      assists: 1,
      minutesPlayed: 1980
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "Liverpool FC",
        competition: "Premier League",
        appearances: 22,
        goals: 2,
        assists: 1,
        minutes: 1980,
        rating: 7.8
      }
    ],
    careerPath: [
      {
        period: "2018-Present",
        club: "Liverpool FC",
        clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
        description: "Transformed Liverpool's defense and became captain",
        stats: {
          appearances: 230,
          goals: 20,
          assists: 15,
          trophies: 6
        }
      }
    ],
    achievements: [
      {
        title: "UEFA Men's Player of the Year",
        year: "2019",
        description: "Recognized as Europe's best player"
      }
    ],
    analysis: {
      technical: "Excellent ball-playing ability and distribution from defense.",
      tactical: "Outstanding positional sense and reading of the game.",
      physical: "Exceptional aerial ability and surprising pace for his size.",
      mental: "Natural leader with excellent composure under pressure.",
      technicalAttributes: [
        { name: "Passing", value: 88 },
        { name: "Ball Control", value: 85 },
        { name: "Heading", value: 92 }
      ],
      tacticalAttributes: [
        { name: "Positioning", value: 95 },
        { name: "Marking", value: 90 }
      ],
      physicalAttributes: [
        { name: "Strength", value: 92 },
        { name: "Speed", value: 78 },
        { name: "Jumping", value: 95 }
      ],
      mentalAttributes: [
        { name: "Leadership", value: 95 },
        { name: "Composure", value: 92 }
      ]
    }
  },

  // PSG Players
  {
    id: "kylian-mbappe",
    name: "Kylian Mbappé",
    age: 25,
    nationality: "France",
    position: "Forward",
    number: 7,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    clubId: "psg",
    clubName: "Paris Saint-Germain",
    clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-PSG-Logo.png",
    dateOfBirth: "1998-12-20",
    placeOfBirth: "Paris, France",
    height: 178,
    weight: 73,
    preferredFoot: "Right",
    bio: "Kylian Mbappé is a French forward considered one of the best players in the world and future Ballon d'Or winner.",
    longBio: "Kylian Mbappé Lottin is a French forward who has established himself as one of the world's best players. His combination of pace, skill, and finishing ability has made him the face of modern football and a global superstar.",
    careerSummary: "A generational talent who has already achieved incredible success and is destined for greatness.",
    playingStyle: "An explosive forward with devastating pace, excellent finishing, and ability to play across the front line.",
    joinedClub: "2017",
    contractUntil: "2024",
    marketValue: "€180M",
    stats: {
      appearances: 280,
      goals: 220,
      assists: 110
    },
    strengths: ["Pace", "Finishing", "Dribbling", "Big Game Performance"],
    weaknesses: ["Physicality", "Aerial Duels", "Defensive Work"],
    detailedStats: {
      shotAccuracy: 78,
      passAccuracy: 85,
      dribbleSuccess: 82,
      aerialDuels: 45,
      tackles: 25
    },
    currentSeason: {
      appearances: 24,
      goals: 25,
      assists: 8,
      minutesPlayed: 2160
    },
    seasonStats: [
      {
        season: "2023/24",
        club: "Paris Saint-Germain",
        competition: "Ligue 1",
        appearances: 24,
        goals: 25,
        assists: 8,
        minutes: 2160,
        rating: 8.5
      }
    ],
    careerPath: [
      {
        period: "2017-Present",
        club: "Paris Saint-Germain",
        clubLogo: "https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-PSG-Logo.png",
        description: "Became PSG's superstar and global icon",
        stats: {
          appearances: 280,
          goals: 220,
          assists: 110,
          trophies: 12
        }
      }
    ],
    achievements: [
      {
        title: "World Cup Winner",
        year: "2018",
        description: "Won the World Cup with France aged just 19"
      }
    ],
    analysis: {
      technical: "Excellent finishing technique and outstanding ball control at pace.",
      tactical: "Good movement and understanding of space in the final third.",
      physical: "Exceptional pace and acceleration with good balance.",
      mental: "Strong mentality in big games and excellent confidence.",
      technicalAttributes: [
        { name: "Finishing", value: 90 },
        { name: "Dribbling", value: 88 },
        { name: "Ball Control", value: 87 }
      ],
      tacticalAttributes: [
        { name: "Positioning", value: 85 },
        { name: "Movement", value: 90 }
      ],
      physicalAttributes: [
        { name: "Speed", value: 97 },
        { name: "Acceleration", value: 95 },
        { name: "Agility", value: 92 }
      ],
      mentalAttributes: [
        { name: "Composure", value: 88 },
        { name: "Determination", value: 90 }
      ]
    }
  }
];

export const popularPlayers = allPlayers.slice(0, 8);
