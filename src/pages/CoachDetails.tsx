import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Flag, Calendar, Award, TrendingUp, Users } from 'lucide-react';
import NotFound from './NotFound';
import { coaches } from '../data/coaches';
import { topClubs } from '../data/clubs';

const CoachDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'career' | 'tactics' | 'achievements'>('overview');
  
  const coach = coaches.find(coach => coach.id === id);
  
  if (!coach) {
    return <NotFound />;
  }
  
  return (
    <div className="fade-in">
      {/* Coach Hero Section */}
      <section className="relative">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        />
        <div className="container relative z-10 px-4 py-12 mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src={coach.image} 
                alt={coach.name}
                className="h-80 w-64 object-cover object-top rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{coach.name}</h1>
                <p className="text-xl text-gray-300 flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                  <span className="flex items-center"><Flag className="h-5 w-5 mr-1" /> {coach.nationality}</span>
                  <span className="flex items-center"><Calendar className="h-5 w-5 mr-1" /> {coach.age} years</span>
                  {coach.current && (
                    <span className="flex items-center">
                      <Users className="h-5 w-5 mr-1" /> 
                      Current Club: 
                      <img 
                        src={topClubs.find(club => club.id === coach.clubs[0].clubId)?.logo} 
                        alt={coach.clubs[0].clubName}
                        className="h-5 w-5 mx-2"
                      />
                      {coach.clubs[0].clubName}
                    </span>
                  )}
                </p>
                <p className="text-gray-300">{coach.bio}</p>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">{coach.stats.gamesInCharge}</div>
                  <div className="text-sm text-gray-300">Games</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{coach.stats.wins}</div>
                  <div className="text-sm text-gray-300">Wins</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{coach.stats.draws}</div>
                  <div className="text-sm text-gray-300">Draws</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-red-400 mb-1">{coach.stats.losses}</div>
                  <div className="text-sm text-gray-300">Losses</div>
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
              onClick={() => setActiveTab('career')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === 'career' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Career
            </button>
            <button 
              onClick={() => setActiveTab('tactics')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === 'tactics' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Tactics
            </button>
            <button 
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === 'achievements' ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Achievements
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
              <h2 className="text-3xl font-bold mb-6">Coach Overview</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-gray-800 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4">About {coach.name}</h3>
                    <p className="text-gray-300 mb-4">{coach.longBio || coach.bio}</p>
                    <p className="text-gray-300">{coach.careerSummary}</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Coaching Philosophy</h3>
                    <p className="text-gray-300 mb-6">{coach.philosophy}</p>
                    
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 text-blue-400 mr-2" /> Key Principles
                    </h4>
                    <ul className="space-y-2">
                      {coach.principles.map((principle, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mt-0.5 mr-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                          </div>
                          <span>{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-800 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-400">Full Name:</span>
                        <span className="font-medium">{coach.fullName || coach.name}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Date of Birth:</span>
                        <span className="font-medium">{coach.dateOfBirth}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Place of Birth:</span>
                        <span className="font-medium">{coach.placeOfBirth}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Nationality:</span>
                        <span className="font-medium">{coach.nationality}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Languages:</span>
                        <span className="font-medium">{coach.languages.join(', ')}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Former Player:</span>
                        <span className="font-medium">{coach.formerPlayer ? 'Yes' : 'No'}</span>
                      </li>
                      {coach.formerPlayer && (
                        <li className="flex justify-between">
                          <span className="text-gray-400">Playing Position:</span>
                          <span className="font-medium">{coach.playingPosition}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {coach.current && (
                    <div className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Current Position</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Club:</span>
                          <Link to={`/club/${coach.clubs[0].clubId}`} className="font-medium text-blue-400 hover:underline">
                            {coach.clubs[0].clubName}
                          </Link>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Appointed:</span>
                          <span className="font-medium">{coach.clubs[0].appointed}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Contract Until:</span>
                          <span className="font-medium">{coach.contractUntil}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Win Rate:</span>
                          <span className="font-medium text-green-400">
                            {Math.round((coach.stats.wins / coach.stats.gamesInCharge) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Key Stats */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Career Statistics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {coach.totalStats.years}
                    </div>
                    <div className="text-lg font-medium mb-1">Years in Management</div>
                    <p className="text-sm text-gray-400">Total years as a head coach across all clubs</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-4xl font-bold text-green-400 mb-2">
                      {coach.totalStats.winRate}%
                    </div>
                    <div className="text-lg font-medium mb-1">Career Win Rate</div>
                    <p className="text-sm text-gray-400">Percentage of matches won throughout career</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">
                      {coach.totalStats.trophies}
                    </div>
                    <div className="text-lg font-medium mb-1">Total Trophies</div>
                    <p className="text-sm text-gray-400">All major trophies won as head coach</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {coach.totalStats.clubs}
                    </div>
                    <div className="text-lg font-medium mb-1">Clubs Managed</div>
                    <p className="text-sm text-gray-400">Number of clubs coached during career</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Career Tab */}
          {activeTab === 'career' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Coaching Career</h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-24 top-0 bottom-0 w-1 bg-blue-500 ml-5 md:ml-0"></div>
                
                {/* Timeline Events */}
                <div className="space-y-12">
                  {coach.clubs.map((club, index) => (
                    <div key={index} className="relative flex">
                      {/* Timeline Dot */}
                      <div className="absolute left-5 md:left-24 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center transform -translate-x-5 md:-translate-x-5 z-10">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      
                      {/* Year */}
                      <div className="hidden md:block md:w-24 pt-2 pr-8 text-right">
                        <span className="text-blue-400 font-semibold">{club.appointed}{club.left ? ` - ${club.left}` : ' - Present'}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="ml-16 md:ml-16">
                        <div className="md:hidden mb-1">
                          <span className="text-blue-400 font-semibold">{club.appointed}{club.left ? ` - ${club.left}` : ' - Present'}</span>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-6">
                          <div className="flex items-center mb-4">
                            <img 
                              src={topClubs.find(c => c.id === club.clubId)?.logo} 
                              alt={club.clubName}
                              className="h-10 w-10 object-contain mr-3"
                            />
                            <h3 className="text-xl font-bold">{club.clubName}</h3>
                            {!club.left && (
                              <span className="ml-3 bg-green-500 text-green-900 text-xs font-medium px-2.5 py-0.5 rounded-full">Current</span>
                            )}
                          </div>
                          
                          <p className="text-gray-300 mb-4">{club.description}</p>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="font-bold">{club.stats?.games || 'N/A'}</div>
                              <div className="text-gray-400">Games</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="font-bold text-green-400">{club.stats?.wins || 'N/A'}</div>
                              <div className="text-gray-400">Wins</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="font-bold text-yellow-400">{club.stats?.draws || 'N/A'}</div>
                              <div className="text-gray-400">Draws</div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 text-center">
                              <div className="font-bold text-purple-400">{club.trophies || 0}</div>
                              <div className="text-gray-400">Trophies</div>
                            </div>
                          </div>
                          
                          {club.achievements && club.achievements.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-700">
                              <h4 className="font-semibold mb-2">Key Achievements</h4>
                              <ul className="space-y-1">
                                {club.achievements.map((achievement, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <Award className="h-4 w-4 text-yellow-400 mr-2 mt-0.5" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Tactics Tab */}
          {activeTab === 'tactics' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Tactical Approach</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-gray-800 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4">Tactical Style</h3>
                    <p className="text-gray-300 mb-4">{coach.style}</p>
                    <p className="text-gray-300">{coach.tacticalApproach}</p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Formation & System</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Preferred Formations</h4>
                        <ul className="space-y-2">
                          {coach.preferredFormations.map((formation, index) => (
                            <li key={index} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mt-0.5 mr-2">
                                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                              </div>
                              <span>{formation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-3">In-Game Adaptations</h4>
                        <p className="text-gray-300">{coach.adaptations}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-800 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">Tactical Attributes</h3>
                    <div className="space-y-3">
                      {coach.tacticalAttributes.map((attr, index) => (
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
                    <h3 className="text-xl font-semibold mb-4">Management Style</h3>
                    <div className="space-y-3">
                      {coach.managementAttributes.map((attr, index) => (
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
              </div>
              
              {/* Tactical Analysis */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Tactical Analysis</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-4">Attacking Approach</h4>
                    <p className="text-gray-300 mb-4">{coach.attackingApproach}</p>
                    
                    <h5 className="font-medium text-blue-400 mb-2">Key Elements</h5>
                    <ul className="space-y-2">
                      {coach.attackingElements.map((element, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mt-0.5 mr-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                          </div>
                          <span>{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-4">Defensive Approach</h4>
                    <p className="text-gray-300 mb-4">{coach.defensiveApproach}</p>
                    
                    <h5 className="font-medium text-blue-400 mb-2">Key Elements</h5>
                    <ul className="space-y-2">
                      {coach.defensiveElements.map((element, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center mt-0.5 mr-2">
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          </div>
                          <span>{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">Achievements & Honors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <Award className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">{coach.totalStats.leagueTitles}</div>
                  <div className="text-lg font-medium">League Titles</div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <Award className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">{coach.totalStats.cupTitles}</div>
                  <div className="text-lg font-medium">Cup Titles</div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <Award className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold mb-1">{coach.totalStats.internationalTitles}</div>
                  <div className="text-lg font-medium">International Titles</div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <h3 className="text-xl font-semibold p-6">Trophy Cabinet</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-700">
                        <th className="text-left py-3 px-4">Trophy</th>
                        <th className="text-left py-3 px-4">Club</th>
                        <th className="text-left py-3 px-4">Season</th>
                        <th className="text-left py-3 px-4">Competition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coach.trophies.map((trophy, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-750' : 'bg-gray-800'}>
                          <td className="py-3 px-4 font-medium flex items-center">
                            <Award className="h-5 w-5 text-yellow-400 mr-2" />
                            {trophy.name}
                          </td>
                          <td className="py-3 px-4">{trophy.club}</td>
                          <td className="py-3 px-4">{trophy.season}</td>
                          <td className="py-3 px-4">{trophy.competition}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Individual Awards */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Individual Awards</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coach.individualAwards.map((award, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Award className="h-8 w-8 text-yellow-400 mr-3" />
                        <h4 className="font-semibold text-lg">{award.name}</h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{award.year} • {award.organization}</p>
                      <p className="text-gray-300">{award.description}</p>
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

export default CoachDetails;