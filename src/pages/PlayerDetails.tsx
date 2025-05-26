import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Flag, Calendar, Ruler, Award, Activity, TrendingUp, TrendingDown } from 'lucide-react';
import NotFound from './NotFound';
import { allPlayers } from '../data/players';
import { topClubs } from '../data/clubs';

const PlayerDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'stats' | 'career' | 'analysis'>('overview');
  
  const player = allPlayers.find(player => player.id === id);
  
  if (!player) {
    return <NotFound />;
  }
  
  const club = topClubs.find(club => club.id === player.clubId);
  
  return (
    <div className="fade-in">
      {/* Player Hero Section */}
      <section className="relative">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          style={{ 
            backgroundImage: `url(${club?.stadiumImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }}
        />
        <div className="container relative z-10 px-4 py-12 mx-auto">
          <Link to={`/club/${player.clubId}`} className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to {player.clubName}
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="h-80 w-64 object-cover object-top rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-gray-800 p-2 rounded-lg shadow-lg">
                  <img 
                    src={player.clubLogo} 
                    alt={player.clubName}
                    className="h-12 w-12 object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center md:justify-start">
                  <span>{player.name}</span>
                  <span className="ml-4 bg-gray-700 text-2xl rounded-full w-10 h-10 flex items-center justify-center">
                    {player.number}
                  </span>
                </h1>
                <p className="text-xl text-gray-300 flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <span className="flex items-center"><User className="h-5 w-5 mr-1" /> {player.position}</span>
                  <span className="flex items-center"><Flag className="h-5 w-5 mr-1" /> {player.nationality}</span>
                  <span className="flex items-center"><Calendar className="h-5 w-5 mr-1" /> {player.dateOfBirth} ({player.age} years)</span>
                  <span className="flex items-center"><Ruler className="h-5 w-5 mr-1" /> {player.height}cm</span>
                </p>
                <p className="text-gray-300">{player.bio}</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">{player.stats.appearances}</div>
                  <div className="text-sm text-gray-300">Appearances</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{player.stats.goals}</div>
                  <div className="text-sm text-gray-300">Goals</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{player.stats.assists}</div>
                  <div className="text-sm text-gray-300">Assists</div>
                </div>
              </div>
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
              onClick={() => setActiveTab('stats')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === 'stats' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Statistics
            </button>
            <button 
              onClick={() => setActiveTab('career')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === 'career' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Career
            </button>
            <button 
              onClick={() => setActiveTab('analysis')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === 'analysis' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Analysis
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
              <h2 className="text-3xl font-bold mb-6">Player Overview</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-gray-800 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4">About {player.name}</h3>
                    <p className="text-gray-300 mb-4">{player.longBio || player.bio}</p>
                    <p className="text-gray-300">{player.careerSummary}</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Playing Style</h3>
                    <p className="text-gray-300 mb-6">{player.playingStyle}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center">
                          <TrendingUp className="h-5 w-5 text-green-400 mr-2" /> Strengths
                        </h4>
                        <ul className="space-y-2">
                          {player.strengths.map((strength, index) => (
                            <li key={index} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center mt-0.5 mr-2">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              </div>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center">
                          <TrendingDown className="h-5 w-5 text-red-400 mr-2" /> Areas to Improve
                        </h4>
                        <ul className="space-y-2">
                          {player.weaknesses.map((weakness, index) => (
                            <li key={index} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center mt-0.5 mr-2">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                              </div>
                              <span>{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-800 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-400">Full Name:</span>
                        <span className="font-medium">{player.fullName || player.name}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Date of Birth:</span>
                        <span className="font-medium">{player.dateOfBirth} ({player.age} years)</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Place of Birth:</span>
                        <span className="font-medium">{player.placeOfBirth}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Nationality:</span>
                        <span className="font-medium">{player.nationality}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Height:</span>
                        <span className="font-medium">{player.height}cm</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Weight:</span>
                        <span className="font-medium">{player.weight}kg</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Preferred Foot:</span>
                        <span className="font-medium">{player.preferredFoot}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Contract</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Current Club:</span>
                        <Link to={`/club/${player.clubId}`} className="font-medium text-blue-400 hover:underline">{player.clubName}</Link>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Joined:</span>
                        <span className="font-medium">{player.joinedClub}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Contract Until:</span>
                        <span className="font-medium">{player.contractUntil}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Jersey Number:</span>
                        <span className="font-medium">{player.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Value:</span>
                        <span className="font-medium">{player.marketValue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 text-yellow-400 mr-2" />
                  Achievements
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {player.achievements.map((achievement, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6">
                      <h4 className="font-semibold text-xl mb-2">{achievement.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">{achievement.year}</p>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Stats Tab */}
          {activeTab === 'stats' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Player Statistics</h2>
              
              {/* Season Stats */}
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-6">Current Season</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">{player.currentSeason.appearances}</div>
                    <div className="text-sm text-gray-300">Appearances</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">{player.currentSeason.goals}</div>
                    <div className="text-sm text-gray-300">Goals</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">{player.currentSeason.assists}</div>
                    <div className="text-sm text-gray-300">Assists</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1">{player.currentSeason.minutesPlayed}</div>
                    <div className="text-sm text-gray-300">Minutes</div>
                  </div>
                </div>
              </div>
              
              {/* Advanced Stats */}
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Performance Indicators</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {Object.entries(player.detailedStats).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <div className="flex items-center w-1/2">
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="h-2.5 rounded-full bg-blue-500"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                        <span className="ml-3 text-sm font-medium">{value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Season History */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <h3 className="text-xl font-semibold p-6">Career Statistics</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-700">
                        <th className="text-left py-3 px-4">Season</th>
                        <th className="text-left py-3 px-4">Club</th>
                        <th className="text-left py-3 px-4">Competition</th>
                        <th className="text-center py-3 px-4">Apps</th>
                        <th className="text-center py-3 px-4">Goals</th>
                        <th className="text-center py-3 px-4">Assists</th>
                        <th className="text-center py-3 px-4">Minutes</th>
                        <th className="text-center py-3 px-4">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {player.seasonStats.map((season, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-750' : 'bg-gray-800'}>
                          <td className="py-3 px-4 font-medium">{season.season}</td>
                          <td className="py-3 px-4">{season.club}</td>
                          <td className="py-3 px-4">{season.competition}</td>
                          <td className="py-3 px-4 text-center">{season.appearances}</td>
                          <td className="py-3 px-4 text-center text-green-400 font-medium">{season.goals}</td>
                          <td className="py-3 px-4 text-center text-yellow-400 font-medium">{season.assists}</td>
                          <td className="py-3 px-4 text-center">{season.minutes}</td>
                          <td className="py-3 px-4 text-center text-blue-400 font-medium">{season.rating}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {/* Career Tab */}
          {activeTab === 'career' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Career Journey</h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-24 top-0 bottom-0 w-1 bg-blue-500 ml-5 md:ml-0"></div>
                
                {/* Timeline Events */}
                <div className="space-y-12">
                  {player.careerPath.map((career, index) => (
                    <div key={index} className="relative flex">
                      {/* Timeline Dot */}
                      <div className="absolute left-5 md:left-24 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center transform -translate-x-5 md:-translate-x-5 z-10">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      
                      {/* Year */}
                      <div className="hidden md:block md:w-24 pt-2 pr-8 text-right">
                        <span className="text-blue-400 font-semibold">{career.period}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="ml-16 md:ml-16">
                        <div className="md:hidden mb-1">
                          <span className="text-blue-400 font-semibold">{career.period}</span>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6">
                          <div className="flex items-center mb-4">
                            <img 
                              src={career.clubLogo} 
                              alt={career.club}
                              className="h-10 w-10 object-contain mr-3"
                            />
                            <h3 className="text-xl font-bold">{career.club}</h3>
                          </div>
                          
                          <p className="text-gray-300 mb-4">{career.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="font-bold">{career.stats.appearances}</div>
                              <div className="text-gray-400">Appearances</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="font-bold text-green-400">{career.stats.goals}</div>
                              <div className="text-gray-400">Goals</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="font-bold text-yellow-400">{career.stats.assists}</div>
                              <div className="text-gray-400">Assists</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="font-bold text-purple-400">{career.stats.trophies}</div>
                              <div className="text-gray-400">Trophies</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Analysis Tab */}
          {activeTab === 'analysis' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Player Analysis</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Technical Analysis</h3>
                  <p className="text-gray-300 mb-4">{player.analysis.technical}</p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Technical Attributes</h4>
                  <div className="space-y-3">
                    {player.analysis.technicalAttributes.map((attr, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-300">{attr.name}</span>
                        <div className="flex items-center w-1/2">
                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="h-2.5 rounded-full bg-blue-500"
                              style={{ width: `${attr.value}%` }}
                            ></div>
                          </div>
                          <span className="ml-3 text-sm font-medium">{attr.value}/100</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Tactical Analysis</h3>
                  <p className="text-gray-300 mb-4">{player.analysis.tactical}</p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Tactical Attributes</h4>
                  <div className="space-y-3">
                    {player.analysis.tacticalAttributes.map((attr, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-300">{attr.name}</span>
                        <div className="flex items-center w-1/2">
                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="h-2.5 rounded-full bg-green-500"
                              style={{ width: `${attr.value}%` }}
                            ></div>
                          </div>
                          <span className="ml-3 text-sm font-medium">{attr.value}/100</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Physical Analysis</h3>
                  <p className="text-gray-300 mb-4">{player.analysis.physical}</p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Physical Attributes</h4>
                  <div className="space-y-3">
                    {player.analysis.physicalAttributes.map((attr, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-300">{attr.name}</span>
                        <div className="flex items-center w-1/2">
                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="h-2.5 rounded-full bg-red-500"
                              style={{ width: `${attr.value}%` }}
                            ></div>
                          </div>
                          <span className="ml-3 text-sm font-medium">{attr.value}/100</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Mental Analysis</h3>
                  <p className="text-gray-300 mb-4">{player.analysis.mental}</p>
                  
                  <h4 className="font-semibold text-lg mb-3">Key Mental Attributes</h4>
                  <div className="space-y-3">
                    {player.analysis.mentalAttributes.map((attr, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-300">{attr.name}</span>
                        <div className="flex items-center w-1/2">
                          <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="h-2.5 rounded-full bg-purple-500"
                              style={{ width: `${attr.value}%` }}
                            ></div>
                          </div>
                          <span className="ml-3 text-sm font-medium">{attr.value}/100</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PlayerDetails;