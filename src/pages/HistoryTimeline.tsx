import React, { useState, useMemo } from 'react';
import { Calendar, Trophy, Users, User, Filter, Clock } from 'lucide-react';
import { topClubs } from '../data';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  type: 'trophy' | 'player' | 'event';
  clubId: string;
  clubName: string;
  clubLogo: string;
  image?: string;
}

const HistoryTimeline: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'trophy' | 'player' | 'event'>('all');
  const [filterClub, setFilterClub] = useState<string>('all');
  const [selectedDecade, setSelectedDecade] = useState<string>('all');

  // Combine all timeline events from all clubs
  const allEvents: TimelineEvent[] = useMemo(() => {
    const events: TimelineEvent[] = [];
    
    topClubs.forEach(club => {
      club.timeline.forEach(event => {
        events.push({
          id: `${club.id}-${event.year}-${event.title.replace(/\s+/g, '-').toLowerCase()}`,
          ...event,
          clubId: club.id,
          clubName: club.name,
          clubLogo: club.logo
        });
      });
    });

    // Add some additional historical events
    const additionalEvents: TimelineEvent[] = [
      {
        id: 'global-financial-crisis-2008',
        year: '2008',
        title: 'Global Financial Crisis Impact',
        description: 'The global financial crisis affected football transfer markets and club finances worldwide.',
        type: 'event',
        clubId: 'global',
        clubName: 'Global Football',
        clubLogo: ''
      },
      {
        id: 'var-introduction-2018',
        year: '2018',
        title: 'VAR Technology Introduction',
        description: 'Video Assistant Referee technology was introduced in major competitions, changing the game forever.',
        type: 'event',
        clubId: 'global',
        clubName: 'Global Football',
        clubLogo: ''
      },
      {
        id: 'covid-pandemic-2020',
        year: '2020',
        title: 'COVID-19 Pandemic',
        description: 'The global pandemic led to suspended seasons, empty stadiums, and significant financial impact on football.',
        type: 'event',
        clubId: 'global',
        clubName: 'Global Football',
        clubLogo: ''
      },
      {
        id: 'ffp-introduction-2011',
        year: '2011',
        title: 'Financial Fair Play Rules',
        description: 'UEFA introduced Financial Fair Play regulations to promote sustainable spending in football.',
        type: 'event',
        clubId: 'global',
        clubName: 'Global Football',
        clubLogo: ''
      }
    ];

    return [...events, ...additionalEvents].sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }, []);

  // Filter events
  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      const typeMatch = filterType === 'all' || event.type === filterType;
      const clubMatch = filterClub === 'all' || event.clubId === filterClub;
      
      let decadeMatch = true;
      if (selectedDecade !== 'all') {
        const eventYear = parseInt(event.year);
        const decade = parseInt(selectedDecade);
        decadeMatch = eventYear >= decade && eventYear < decade + 10;
      }
      
      return typeMatch && clubMatch && decadeMatch;
    });
  }, [allEvents, filterType, filterClub, selectedDecade]);

  // Get unique clubs for filter
  const clubs = useMemo(() => {
    const uniqueClubs = [...new Set(allEvents.map(event => event.clubId))]
      .map(clubId => {
        const event = allEvents.find(e => e.clubId === clubId);
        return { id: clubId, name: event?.clubName || '' };
      })
      .filter(club => club.name)
      .sort((a, b) => a.name.localeCompare(b.name));
    
    return uniqueClubs;
  }, [allEvents]);

  // Decades for filtering
  const decades = ['2000', '2010', '2020'];

  const getIcon = (type: string) => {
    switch (type) {
      case 'trophy':
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 'player':
        return <Users className="h-5 w-5 text-blue-500" />;
      case 'event':
        return <User className="h-5 w-5 text-green-500" />;
      default:
        return <Calendar className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'trophy':
        return 'bg-yellow-500';
      case 'player':
        return 'bg-blue-500';
      case 'event':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const clearFilters = () => {
    setFilterType('all');
    setFilterClub('all');
    setSelectedDecade('all');
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              20 Years of <span className="text-blue-500">Football History</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore the most significant moments, achievements, and milestones 
              in modern football history from the world's top clubs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                <span>{allEvents.length} Historical Events</span>
              </div>
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                <span>{allEvents.filter(e => e.type === 'trophy').length} Trophy Wins</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-green-500 mr-2" />
                <span>{allEvents.filter(e => e.type === 'player').length} Player Milestones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as typeof filterType)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Events</option>
                <option value="trophy">Trophies</option>
                <option value="player">Player Milestones</option>
                <option value="event">Club Events</option>
              </select>

              <select
                value={filterClub}
                onChange={(e) => setFilterClub(e.target.value)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Clubs</option>
                {clubs.map(club => (
                  <option key={club.id} value={club.id}>{club.name}</option>
                ))}
              </select>

              <select
                value={selectedDecade}
                onChange={(e) => setSelectedDecade(e.target.value)}
                className="bg-gray-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Years</option>
                {decades.map(decade => (
                  <option key={decade} value={decade}>{decade}s</option>
                ))}
              </select>

              {(filterType !== 'all' || filterClub !== 'all' || selectedDecade !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 transition"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-gray-400">
              Showing {filteredEvents.length} of {allEvents.length} events
            </span>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-950">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform md:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {filteredEvents.map((event, index) => (
                  <div key={event.id} className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline Dot */}
                    <div className={`absolute left-4 md:left-1/2 w-8 h-8 ${getTypeColor(event.type)} rounded-full flex items-center justify-center transform -translate-x-4 md:-translate-x-4 z-10`}>
                      {getIcon(event.type)}
                    </div>
                    
                    {/* Year Badge */}
                    <div className="hidden md:block md:w-1/2 pt-2 pr-8 text-right">
                      {index % 2 === 0 && (
                        <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                          {event.year}
                        </span>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                    }`}>
                      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                        {/* Mobile Year */}
                        <div className="md:hidden mb-2">
                          <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                            {event.year}
                          </span>
                        </div>
                        
                        {/* Club Info */}
                        {event.clubLogo && (
                          <div className="flex items-center mb-3">
                            <img 
                              src={event.clubLogo} 
                              alt={event.clubName}
                              className="h-6 w-6 object-contain mr-2"
                            />
                            <span className="text-sm text-gray-400">{event.clubName}</span>
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold mb-3 flex items-center">
                          {getIcon(event.type)}
                          <span className="ml-2">{event.title}</span>
                        </h3>
                        
                        <p className="text-gray-300 mb-4">{event.description}</p>
                        
                        {event.image && (
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-48 object-cover rounded-md"
                          />
                        )}
                        
                        {/* Event Type Badge */}
                        <div className="mt-4">
                          <span className={`inline-block ${getTypeColor(event.type)} text-white text-xs font-medium px-2 py-1 rounded-full`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Year Badge - Right Side */}
                    <div className="hidden md:block md:w-1/2 pt-2 pl-8">
                      {index % 2 === 1 && (
                        <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                          {event.year}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <Calendar className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your filters to see more historical events
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
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Historical Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {allEvents.filter(e => e.type === 'trophy').length}
              </div>
              <div className="text-lg font-medium mb-1">Major Trophies</div>
              <p className="text-sm text-gray-400">Won by top clubs in the last 20 years</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {allEvents.filter(e => e.type === 'player').length}
              </div>
              <div className="text-lg font-medium mb-1">Player Milestones</div>
              <p className="text-sm text-gray-400">Significant player transfers and achievements</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <User className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-400 mb-2">
                {allEvents.filter(e => e.type === 'event').length}
              </div>
              <div className="text-lg font-medium mb-1">Major Events</div>
              <p className="text-sm text-gray-400">Important moments in football history</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryTimeline;
