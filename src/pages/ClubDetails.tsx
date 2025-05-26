import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, Calendar, MapPin, User, Ticket, ArrowLeft, ChevronRight, Trophy } from 'lucide-react';
import PlayerCard from '../components/PlayerCard';
import NotFound from './NotFound';
import { topClubs } from '../data/clubs';
import { allPlayers } from '../data/players';
import { coaches } from '../data/coaches';
import { trophies } from '../data/trophies';

const ClubDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'players' | 'coaches' | 'trophies' | 'history'>('overview');
  
  const club = topClubs.find(club => club.id === id);
  
  if (!club) {
    return <NotFound />;
  }
  
  // Get club's players
  const clubPlayers = allPlayers.filter(player => player.clubId === club.id);
  
  // Get club's coaches (past and present)
  const clubCoaches = coaches.filter(coach => coach.clubs.some(c => c.clubId === club.id));
  
  // Get club's trophies
  const clubTrophies = trophies.filter(trophy => trophy.clubId === club.id);
  
  return (
    <div className="fade-in">
      {/* Club Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${club.stadiumImage})`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="container relative z-10 px-4 mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
            <img 
              src={club.logo} 
              alt={`${club.name} logo`}
              className="h-32 w-32 object-contain bg-white bg-opacity-10 p-2 rounded-lg"
            />
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{club.name}</h1>
              <p className="text-xl text-gray-300 flex flex-wrap justify-center md:justify-start gap-4">
                <span className="flex items-center"><MapPin className="h-5 w-5 mr-1" /> {club.location}</span>
                <span className="flex items-center"><Calendar className="h-5 w-5 mr-1" /> Est. {club.established}</span>
                <span className="flex items-center"><Ticket className="h-5 w-5 mr-1" /> {club.stadium}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation Tabs */}
      <section className="bg-gray-800 sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === 'overview' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('players')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition flex items-center ${
                activeTab === 'players' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Users className="h-4 w-4 mr-2" /> Players ({clubPlayers.length})
            </button>
            <button 
              onClick={() => setActiveTab('coaches')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition flex items-center ${
                activeTab === 'coaches' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <User className="h-4 w-4 mr-2" /> Coaches ({clubCoaches.length})
            </button>
            <button 
              onClick={() => setActiveTab('trophies')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition flex items-center ${
                activeTab === 'trophies' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Trophy className="h-4 w-4 mr-2" /> Trophies ({clubTrophies.length})
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition flex items-center ${
                activeTab === 'history' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Calendar className="h-4 w-4 mr-2" /> History
            </button>
          </div>
        </div>
      </section>
      
      {/* Content Sections */}
      <section className="section">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Club Overview</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-gray-800 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4">About {club.name}</h3>
                    <p className="text-gray-300 mb-4">{club.description}</p>
                    <p className="text-gray-300">{club.history}</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-1">{club.statistics.leagueTitles}</div>
                        <div className="text-sm text-gray-300">League Titles</div>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-green-400 mb-1">{club.statistics.europeanTitles}</div>
                        <div className="text-sm text-gray-300">European Titles</div>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-1">{club.statistics.domesticCups}</div>
                        <div className="text-sm text-gray-300">Domestic Cups</div>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-1">{club.statistics.worldTitles}</div>
                        <div className="text-sm text-gray-300">World Titles</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-800 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Club Info</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-400">Full Name:</span>
                        <span className="font-medium">{club.fullName}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Nickname:</span>
                        <span className="font-medium">{club.nickname}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Stadium:</span>
                        <span className="font-medium">{club.stadium} ({club.stadiumCapacity.toLocaleString()})</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Manager:</span>
                        <span className="font-medium">{club.currentManager}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">League:</span>
                        <span className="font-medium">{club.league}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Website:</span>
                        <a href={club.website} target="_blank" className="text-blue-400 hover:underline">{club.website.replace('https://', '')}</a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Current Season</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Position:</span>
                        <span className="font-medium">{club.currentSeason.position}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Played:</span>
                        <span className="font-medium">{club.currentSeason.played}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Won:</span>
                        <span className="font-medium text-green-400">{club.currentSeason.won}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Drawn:</span>
                        <span className="font-medium text-yellow-400">{club.currentSeason.drawn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Lost:</span>
                        <span className="font-medium text-red-400">{club.currentSeason.lost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Goals:</span>
                        <span className="font-medium">{club.currentSeason.goalsFor} - {club.currentSeason.goalsAgainst}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Points:</span>
                        <span className="font-medium text-blue-400">{club.currentSeason.points}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Featured Players */}
              <div className="mt-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Featured Players</h3>
                  <button 
                    onClick={() => setActiveTab('players')}
                    className="text-blue-400 flex items-center hover:underline"
                  >
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {clubPlayers.slice(0, 4).map(player => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Players Tab */}
          {activeTab === 'players' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Players</h2>
              
              {/* Filter/Search Controls */}
              <div className="bg-gray-800 rounded-lg p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Search players..."
                    className="w-full bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-4">
                  <select className="bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">All Positions</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                    <option value="Defender">Defender</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Forward">Forward</option>
                  </select>
                  <select className="bg-gray-700 text-white rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Sort by</option>
                    <option value="name">Name</option>
                    <option value="number">Number</option>
                    <option value="goals">Goals</option>
                    <option value="appearances">Appearances</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {clubPlayers.map(player => (
                  <PlayerCard key={player.id} player={player} />
                ))}
              </div>
            </div>
          )}
          
          {/* Coaches Tab */}
          {activeTab === 'coaches' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Coaches</h2>
              
              {/* Current Coach */}
              {clubCoaches.filter(coach => coach.current).map(coach => (
                <div key={coach.id} className="bg-gray-800 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Current Coach</h3>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <img 
                        src={coach.image} 
                        alt={coach.name}
                        className="rounded-lg w-full h-auto object-cover"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-2xl font-bold mb-2">{coach.name}</h4>
                      <p className="text-gray-300 mb-4">
                        <span className="text-blue-400">Nationality:</span> {coach.nationality} | 
                        <span className="text-blue-400 ml-2">Age:</span> {coach.age} | 
                        <span className="text-blue-400 ml-2">Appointed:</span> {coach.clubs.find(c => c.clubId === club.id)?.appointed}
                      </p>
                      <p className="text-gray-300 mb-4">{coach.bio}</p>
                      
                      <h5 className="font-semibold text-lg mb-2">Coaching Style</h5>
                      <p className="text-gray-300 mb-4">{coach.style}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-700 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-blue-400">{coach.stats.gamesInCharge}</div>
                          <div className="text-sm text-gray-300">Games</div>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-green-400">{coach.stats.wins}</div>
                          <div className="text-sm text-gray-300">Wins</div>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-yellow-400">{coach.stats.draws}</div>
                          <div className="text-sm text-gray-300">Draws</div>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-red-400">{coach.stats.losses}</div>
                          <div className="text-sm text-gray-300">Losses</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Past Coaches */}
              <h3 className="text-2xl font-semibold mb-4">Past Coaches</h3>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-700">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Nationality</th>
                      <th className="text-left py-3 px-4">Period</th>
                      <th className="text-left py-3 px-4">Win Rate</th>
                      <th className="text-left py-3 px-4">Trophies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clubCoaches.filter(coach => !coach.current).map((coach, index) => {
                      const clubTenure = coach.clubs.find(c => c.clubId === club.id);
                      return (
                        <tr key={coach.id} className={index % 2 === 0 ? 'bg-gray-750' : 'bg-gray-800'}>
                          <td className="py-3 px-4">
                            <Link to={`/coach/${coach.id}`} className="hover:text-blue-400 font-medium">
                              {coach.name}
                            </Link>
                          </td>
                          <td className="py-3 px-4">{coach.nationality}</td>
                          <td className="py-3 px-4">{clubTenure?.appointed} - {clubTenure?.left}</td>
                          <td className="py-3 px-4">
                            <span className="text-blue-400 font-medium">
                              {Math.round((coach.stats.wins / coach.stats.gamesInCharge) * 100)}%
                            </span>
                          </td>
                          <td className="py-3 px-4">{clubTenure?.trophies || 0}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Trophies Tab */}
          {activeTab === 'trophies' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Trophy Cabinet</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubTrophies.map(trophy => (
                  <div key={trophy.id} className="bg-gray-800 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center p-6">
                      <Trophy className="h-24 w-24 text-yellow-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-2">{trophy.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {trophy.competition} • {trophy.season}
                      </p>
                      <p className="text-gray-300">{trophy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Club History</h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-500 ml-5 md:ml-0"></div>
                
                {/* Timeline Events */}
                <div className="space-y-12">
                  {club.timeline.map((event, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-5 md:left-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center transform -translate-x-5 md:-translate-x-5 z-10">
                        {event.type === 'trophy' ? (
                          <Trophy className="h-5 w-5 text-white" />
                        ) : event.type === 'player' ? (
                          <Users className="h-5 w-5 text-white" />
                        ) : (
                          <Calendar className="h-5 w-5 text-white" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className={`ml-16 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                      }`}>
                        <div className="bg-gray-800 rounded-lg p-6">
                          <div className="text-blue-400 font-semibold mb-2">{event.year}</div>
                          <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                          <p className="text-gray-300">{event.description}</p>
                          
                          {event.image && (
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-auto rounded-md mt-4"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ClubDetails;