import React, { useState, useMemo } from 'react';
import { Users, Filter, Search, Award, Target, Activity } from 'lucide-react';
import PlayerCard from '../components/PlayerCard';
import { allPlayers } from '../data';

const AllPlayers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'age' | 'goals' | 'appearances' | 'marketValue'>('name');
  const [filterPosition, setFilterPosition] = useState<string>('all');
  const [filterClub, setFilterClub] = useState<string>('all');
  const [filterNationality, setFilterNationality] = useState<string>('all');

  // Get unique values for filters
  const filterOptions = useMemo(() => {
    const positions = [...new Set(allPlayers.map(player => player.position))].sort();
    const clubs = [...new Set(allPlayers.map(player => player.clubName))].sort();
    const nationalities = [...new Set(allPlayers.map(player => player.nationality))].sort();
    
    return { positions, clubs, nationalities };
  }, []);

  // Filter and sort players
  const filteredAndSortedPlayers = useMemo(() => {
    let filtered = allPlayers.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           player.nationality.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           player.clubName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPosition = filterPosition === 'all' || player.position === filterPosition;
      const matchesClub = filterClub === 'all' || player.clubName === filterClub;
      const matchesNationality = filterNationality === 'all' || player.nationality === filterNationality;
      
      return matchesSearch && matchesPosition && matchesClub && matchesNationality;
    });

    // Sort players
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'age':
          return a.age - b.age;
        case 'goals':
          return b.stats.goals - a.stats.goals;
        case 'appearances':
          return b.stats.appearances - a.stats.appearances;
        case 'marketValue':
          const aValue = parseInt(a.marketValue.replace(/[€M]/g, ''));
          const bValue = parseInt(b.marketValue.replace(/[€M]/g, ''));
          return bValue - aValue;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, filterPosition, filterClub, filterNationality]);

  // Calculate statistics
  const stats = useMemo(() => {
    return {
      totalPlayers: allPlayers.length,
      totalGoals: allPlayers.reduce((sum, player) => sum + player.stats.goals, 0),
      totalAppearances: allPlayers.reduce((sum, player) => sum + player.stats.appearances, 0),
      averageAge: Math.round(allPlayers.reduce((sum, player) => sum + player.age, 0) / allPlayers.length),
      topScorer: allPlayers.reduce((top, player) => 
        player.stats.goals > top.stats.goals ? player : top
      ),
      mostAppearances: allPlayers.reduce((top, player) => 
        player.stats.appearances > top.stats.appearances ? player : top
      )
    };
  }, []);

  const clearFilters = () => {
    setSearchTerm('');
    setFilterPosition('all');
    setFilterClub('all');
    setFilterNationality('all');
    setSortBy('name');
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              World's Elite <span className="text-blue-500">Football Players</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover comprehensive profiles, statistics, and career information about 
              the world's most talented football players from top clubs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <span>{stats.totalPlayers} Elite Players</span>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 text-green-500 mr-2" />
                <span>{stats.totalGoals.toLocaleString()} Career Goals</span>
              </div>
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-purple-500 mr-2" />
                <span>{stats.totalAppearances.toLocaleString()} Total Appearances</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-yellow-500 mr-2" />
                <span>Age {stats.averageAge} Average</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Players Highlight */}
      <section className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Target className="h-5 w-5 text-green-500 mr-2" />
                Top Goalscorer
              </h3>
              <div className="flex items-center space-x-4">
                <img 
                  src={stats.topScorer.image} 
                  alt={stats.topScorer.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{stats.topScorer.name}</div>
                  <div className="text-sm text-gray-400">{stats.topScorer.stats.goals} goals • {stats.topScorer.clubName}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Activity className="h-5 w-5 text-purple-500 mr-2" />
                Most Appearances
              </h3>
              <div className="flex items-center space-x-4">
                <img 
                  src={stats.mostAppearances.image} 
                  alt={stats.mostAppearances.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{stats.mostAppearances.name}</div>
                  <div className="text-sm text-gray-400">{stats.mostAppearances.stats.appearances} apps • {stats.mostAppearances.clubName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-gray-950 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search players, clubs, nationalities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800 text-white rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="age">Age</option>
                  <option value="goals">Goals</option>
                  <option value="appearances">Appearances</option>
                  <option value="marketValue">Market Value</option>
                </select>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={filterPosition}
                onChange={(e) => setFilterPosition(e.target.value)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Positions</option>
                {filterOptions.positions.map(position => (
                  <option key={position} value={position}>{position}</option>
                ))}
              </select>

              <select
                value={filterClub}
                onChange={(e) => setFilterClub(e.target.value)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Clubs</option>
                {filterOptions.clubs.map(club => (
                  <option key={club} value={club}>{club}</option>
                ))}
              </select>

              <select
                value={filterNationality}
                onChange={(e) => setFilterNationality(e.target.value)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Nationalities</option>
                {filterOptions.nationalities.map(nationality => (
                  <option key={nationality} value={nationality}>{nationality}</option>
                ))}
              </select>

              {(searchTerm || filterPosition !== 'all' || filterClub !== 'all' || filterNationality !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 transition"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-center">
              <span className="text-gray-400">
                Showing {filteredAndSortedPlayers.length} of {stats.totalPlayers} players
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="section bg-gray-900">
        <div className="container mx-auto px-4">
          {filteredAndSortedPlayers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedPlayers.map(player => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Users className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No players found</h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={clearFilters}
                className="btn btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Position Distribution */}
      <section className="bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Player Distribution by Position</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filterOptions.positions.map(position => {
              const count = allPlayers.filter(player => player.position === position).length;
              const percentage = Math.round((count / allPlayers.length) * 100);
              
              return (
                <div key={position} className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{count}</div>
                  <div className="text-sm text-gray-300 mb-2">{position}</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{percentage}%</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllPlayers;
