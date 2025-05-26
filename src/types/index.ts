export interface Club {
  id: string;
  name: string;
  fullName: string;
  country: string;
  established: number;
  logo: string;
  stadiumImage: string;
  stadium: string;
  stadiumCapacity: number;
  nickname: string;
  location: string;
  website: string;
  league: string;
  currentManager: string;
  description: string;
  history: string;
  players: string[]; // IDs of players
  trophies: {
    total: number;
    major: number;
    minor: number;
  };
  statistics: {
    leagueTitles: number;
    europeanTitles: number;
    domesticCups: number;
    worldTitles: number;
  };
  currentSeason: {
    position: number;
    played: number;
    won: number;
    drawn: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
  };
  timeline: Array<{
    year: string;
    title: string;
    description: string;
    type: 'trophy' | 'player' | 'event';
    image?: string;
  }>;
}

export interface Player {
  id: string;
  name: string;
  fullName?: string;
  age: number;
  nationality: string;
  position: string;
  number: number;
  image: string;
  clubId: string;
  clubName: string;
  clubLogo: string;
  dateOfBirth: string;
  placeOfBirth: string;
  height: number;
  weight: number;
  preferredFoot: string;
  bio: string;
  longBio?: string;
  careerSummary?: string;
  playingStyle?: string;
  joinedClub: string;
  contractUntil: string;
  marketValue: string;
  stats: {
    appearances: number;
    goals: number;
    assists: number;
  };
  strengths: string[];
  weaknesses: string[];
  detailedStats: {
    [key: string]: number;
  };
  currentSeason: {
    appearances: number;
    goals: number;
    assists: number;
    minutesPlayed: number;
  };
  seasonStats: Array<{
    season: string;
    club: string;
    competition: string;
    appearances: number;
    goals: number;
    assists: number;
    minutes: number;
    rating: number;
  }>;
  careerPath: Array<{
    period: string;
    club: string;
    clubLogo: string;
    description: string;
    stats: {
      appearances: number;
      goals: number;
      assists: number;
      trophies: number;
    };
  }>;
  achievements: Array<{
    title: string;
    year: string;
    description: string;
  }>;
  analysis: {
    technical: string;
    tactical: string;
    physical: string;
    mental: string;
    technicalAttributes: Array<{ name: string; value: number }>;
    tacticalAttributes: Array<{ name: string; value: number }>;
    physicalAttributes: Array<{ name: string; value: number }>;
    mentalAttributes: Array<{ name: string; value: number }>;
  };
}

export interface Coach {
  id: string;
  name: string;
  fullName?: string;
  age: number;
  nationality: string;
  image: string;
  dateOfBirth: string;
  placeOfBirth: string;
  bio: string;
  longBio?: string;
  careerSummary?: string;
  style: string;
  philosophy: string;
  principles: string[];
  languages: string[];
  formerPlayer: boolean;
  playingPosition?: string;
  current: boolean;
  contractUntil?: string;
  stats: {
    gamesInCharge: number;
    wins: number;
    draws: number;
    losses: number;
  };
  totalStats: {
    years: number;
    winRate: number;
    trophies: number;
    clubs: number;
    leagueTitles: number;
    cupTitles: number;
    internationalTitles: number;
  };
  clubs: Array<{
    clubId: string;
    clubName: string;
    appointed: string;
    left?: string;
    description?: string;
    trophies?: number;
    stats?: {
      games: number;
      wins: number;
      draws: number;
      losses: number;
    };
    achievements?: string[];
  }>;
  preferredFormations: string[];
  adaptations: string;
  tacticalApproach: string;
  attackingApproach: string;
  defensiveApproach: string;
  attackingElements: string[];
  defensiveElements: string[];
  tacticalAttributes: Array<{ name: string; value: number }>;
  managementAttributes: Array<{ name: string; value: number }>;
  trophies: Array<{
    name: string;
    club: string;
    season: string;
    competition: string;
  }>;
  individualAwards: Array<{
    name: string;
    year: string;
    organization: string;
    description: string;
  }>;
}

export interface Trophy {
  id: string;
  clubId: string;
  name: string;
  competition: string;
  season: string;
  description: string;
  image?: string;
}