import React, { useState, useMemo } from 'react';
import { Trophy, Users, Award, Filter, Search } from 'lucide-react';
import ClubCard from '../components/ClubCard';
import { topClubs } from '../data';

const AllClubs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'established' | 'trophies' | 'league'>('name');
  const [filterCountry, setFilterCountry] = useState<string>('all');

  // Get unique countries for filter
  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(topClubs.map(club => club.country))].sort();
    return uniqueCountries;
  }, []);

  // Filter and sort clubs
  const filteredAndSortedClubs = useMemo(() => {
    let filtered = topClubs.filter(club => {
      const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           club.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           club.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           club.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           club.league.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCountry = filterCountry === 'all' || club.country === filterCountry;
      
      return matchesSearch && matchesCountry;
    });

    // Sort clubs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'established':
          return a.established - b.established;
        case 'trophies':
          return b.trophies.total - a.trophies.total;
        case 'league':
          return a.league.localeCompare(b.league);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, filterCountry]);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              World's Top <span className="text-blue-500">Football Clubs</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore comprehensive information about the most prestigious football clubs, 
              their rich histories, legendary players, and remarkable achievements.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                <span>{topClubs.reduce((sum, club) => sum + club.trophies.total, 0)} Total Trophies</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                <span>{topClubs.reduce((sum, club) => sum + club.players.length, 0)}+ Players</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-green-500 mr-2" />
                <span>{countries.length} Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search clubs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">Filters:</span>
              </div>
              
              <select
                value={filterCountry}
                onChange={(e) => setFilterCountry(e.target.value)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name">Sort by Name</option>
                <option value="established">Sort by Founded</option>
                <option value="trophies">Sort by Trophies</option>
                <option value="league">Sort by League</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <span className="text-gray-400">
              Showing {filteredAndSortedClubs.length} of {topClubs.length} clubs
            </span>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="section bg-gray-950">
        <div className="container mx-auto px-4">
          {filteredAndSortedClubs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedClubs.map(club => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Trophy className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No clubs found</h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterCountry('all');
                  setSortBy('name');
                }}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Club Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">
                {Math.round(topClubs.reduce((sum, club) => sum + club.established, 0) / topClubs.length)}
              </div>
              <div className="text-sm text-gray-300">Average Founded Year</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">
                {Math.max(...topClubs.map(club => club.trophies.total))}
              </div>
              <div className="text-sm text-gray-300">Most Trophies</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">
                {Math.max(...topClubs.map(club => club.stadiumCapacity)).toLocaleString()}
              </div>
              <div className="text-sm text-gray-300">Largest Stadium</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                {countries.length}
              </div>
              <div className="text-sm text-gray-300">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllClubs;
