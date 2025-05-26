import React, { useState, useMemo } from 'react';
import { User, Filter, Search, Award, Trophy, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coaches } from '../data';

const AllCoaches: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'age' | 'winRate' | 'trophies' | 'experience'>('name');
  const [filterStatus, setFilterStatus] = useState<'all' | 'current' | 'available'>('all');
  const [filterNationality, setFilterNationality] = useState<string>('all');

  // Get unique nationalities for filter
  const nationalities = useMemo(() => {
    return [...new Set(coaches.map(coach => coach.nationality))].sort();
  }, []);

  // Filter and sort coaches
  const filteredAndSortedCoaches = useMemo(() => {
    let filtered = coaches.filter(coach => {
      const matchesSearch = coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           coach.nationality.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           coach.style.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           coach.clubs.some(club => club.clubName.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStatus = filterStatus === 'all' || 
                           (filterStatus === 'current' && coach.current) ||
                           (filterStatus === 'available' && !coach.current);
      
      const matchesNationality = filterNationality === 'all' || coach.nationality === filterNationality;
      
      return matchesSearch && matchesStatus && matchesNationality;
    });

    // Sort coaches
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'age':
          return a.age - b.age;
        case 'winRate':
          return b.totalStats.winRate - a.totalStats.winRate;
        case 'trophies':
          return b.totalStats.trophies - a.totalStats.trophies;
        case 'experience':
          return b.totalStats.years - a.totalStats.years;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, filterStatus, filterNationality]);

  // Calculate statistics
  const stats = useMemo(() => {
    return {
      totalCoaches: coaches.length,
      currentlyEmployed: coaches.filter(coach => coach.current).length,
      averageAge: Math.round(coaches.reduce((sum, coach) => sum + coach.age, 0) / coaches.length),
      totalTrophies: coaches.reduce((sum, coach) => sum + coach.totalStats.trophies, 0),
      averageWinRate: Math.round(coaches.reduce((sum, coach) => sum + coach.totalStats.winRate, 0) / coaches.length),
      mostSuccessful: coaches.reduce((top, coach) => 
        coach.totalStats.trophies > top.totalStats.trophies ? coach : top
      ),
      highestWinRate: coaches.reduce((top, coach) => 
        coach.totalStats.winRate > top.totalStats.winRate ? coach : top
      )
    };
  }, []);

  const clearFilters = () => {
    setSearchTerm('');
    setFilterStatus('all');
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
              Elite Football <span className="text-blue-500">Coaches & Managers</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover the tactical minds behind the world's greatest teams. Explore detailed 
              profiles, achievements, and coaching philosophies of football's top managers.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <User className="h-5 w-5 text-blue-500 mr-2" />
                <span>{stats.totalCoaches} Elite Coaches</span>
              </div>
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                <span>{stats.totalTrophies} Combined Trophies</span>
              </div>
              <div className="flex items-center">
                <Target className="h-5 w-5 text-green-500 mr-2" />
                <span>{stats.averageWinRate}% Average Win Rate</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-purple-500 mr-2" />
                <span>{stats.currentlyEmployed} Currently Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Coaches Highlight */}
      <section className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                Most Successful Coach
              </h3>
              <div className="flex items-center space-x-4">
                <img 
                  src={stats.mostSuccessful.image} 
                  alt={stats.mostSuccessful.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{stats.mostSuccessful.name}</div>
                  <div className="text-sm text-gray-400">
                    {stats.mostSuccessful.totalStats.trophies} trophies • {stats.mostSuccessful.nationality}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Target className="h-5 w-5 text-green-500 mr-2" />
                Highest Win Rate
              </h3>
              <div className="flex items-center space-x-4">
                <img 
                  src={stats.highestWinRate.image} 
                  alt={stats.highestWinRate.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{stats.highestWinRate.name}</div>
                  <div className="text-sm text-gray-400">
                    {stats.highestWinRate.totalStats.winRate}% win rate • {stats.highestWinRate.nationality}
                  </div>
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
                  placeholder="Search coaches, clubs, styles..."
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
                  <option value="winRate">Win Rate</option>
                  <option value="trophies">Trophies</option>
                  <option value="experience">Experience</option>
                </select>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Coaches</option>
                <option value="current">Currently Employed</option>
                <option value="available">Available</option>
              </select>

              <select
                value={filterNationality}
                onChange={(e) => setFilterNationality(e.target.value)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Nationalities</option>
                {nationalities.map(nationality => (
                  <option key={nationality} value={nationality}>{nationality}</option>
                ))}
              </select>

              {(searchTerm || filterStatus !== 'all' || filterNationality !== 'all') && (
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
                Showing {filteredAndSortedCoaches.length} of {stats.totalCoaches} coaches
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="section bg-gray-900">
        <div className="container mx-auto px-4">
          {filteredAndSortedCoaches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedCoaches.map(coach => {
                const currentClub = coach.clubs.find(club => !club.left);
                
                return (
                  <Link
                    key={coach.id}
                    to={`/coach/${coach.id}`}
                    className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <img 
                          src={coach.image} 
                          alt={coach.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition">
                            {coach.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">{coach.nationality} • {coach.age} years</p>
                          {coach.current && currentClub ? (
                            <div className="flex items-center text-sm">
                              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                              <span className="text-green-400">{currentClub.clubName}</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-sm">
                              <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
                              <span className="text-gray-400">Available</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{coach.bio}</p>

                      <div className="grid grid-cols-3 gap-3 text-xs">
                        <div className="bg-gray-700 rounded p-2 text-center">
                          <div className="font-bold text-yellow-400">{coach.totalStats.trophies}</div>
                          <div className="text-gray-400">Trophies</div>
                        </div>
                        <div className="bg-gray-700 rounded p-2 text-center">
                          <div className="font-bold text-green-400">{coach.totalStats.winRate}%</div>
                          <div className="text-gray-400">Win Rate</div>
                        </div>
                        <div className="bg-gray-700 rounded p-2 text-center">
                          <div className="font-bold text-blue-400">{coach.totalStats.years}</div>
                          <div className="text-gray-400">Years</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-700">
                        <p className="text-xs text-gray-500 italic line-clamp-2">"{coach.philosophy}"</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <User className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No coaches found</h3>
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

      {/* Statistics */}
      <section className="bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Coaching Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">{stats.averageAge}</div>
              <div className="text-sm text-gray-300">Average Age</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">{stats.averageWinRate}%</div>
              <div className="text-sm text-gray-300">Average Win Rate</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">{stats.totalTrophies}</div>
              <div className="text-sm text-gray-300">Total Trophies</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">{nationalities.length}</div>
              <div className="text-sm text-gray-300">Nationalities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCoaches;
