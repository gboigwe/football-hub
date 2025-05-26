import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, Award, User, ArrowRight, Info } from 'lucide-react';
import ClubCard from '../components/ClubCard';
import PlayerCard from '../components/PlayerCard';
import StatCard from '../components/StatCard';
import { topClubs } from '../data/clubs';
import { popularPlayers } from '../data/players';

const Dashboard: React.FC = () => {
  // Add this inside the Dashboard component, right after the opening
console.log('=== DEBUG INFO ===');
console.log('topClubs:', topClubs);
console.log('topClubs length:', topClubs?.length);
console.log('popularPlayers:', popularPlayers);
console.log('popularPlayers length:', popularPlayers?.length);
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Explore the World's <span className="text-blue-500">Top Football Clubs</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive data about the most prestigious clubs, their legendary players, 
              accomplished coaches, and rich histories spanning the last 20 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#clubs" className="btn btn-primary flex items-center justify-center">
                <Trophy className="mr-2 h-5 w-5" /> Explore Top Clubs
              </a>
              <a href="#history" className="btn btn-secondary flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" /> Historical Timeline
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="bg-gray-950 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard 
              icon={<Trophy className="h-10 w-10 text-yellow-500" />}
              value="5"
              label="Top Clubs"
              description="The world's most elite football clubs"
            />
            <StatCard 
              icon={<Users className="h-10 w-10 text-blue-500" />}
              value="250+"
              label="Star Players"
              description="Detailed player statistics and profiles"
            />
            <StatCard 
              icon={<User className="h-10 w-10 text-green-500" />}
              value="50+"
              label="Elite Coaches"
              description="Past and present coaching legends"
            />
            <StatCard 
              icon={<Award className="h-10 w-10 text-purple-500" />}
              value="500+"
              label="Major Trophies"
              description="Championships and achievements"
            />
          </div>
        </div>
      </section>

      {/* Top Clubs Section */}
      <section id="clubs" className="section bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-3xl flex items-center">
              <Trophy className="h-7 w-7 text-yellow-500 mr-2" /> 
              Top Football Clubs
            </h2>
            <Link to="/clubs" className="text-blue-400 flex items-center hover:underline">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {topClubs.map(club => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section id="players" className="section bg-gray-900">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-3xl flex items-center">
              <Users className="h-7 w-7 text-blue-500 mr-2" />
              Star Players
            </h2>
            <Link to="/players" className="text-blue-400 flex items-center hover:underline">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPlayers.slice(0, 8).map(player => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Historical Timeline Teaser */}
      <section id="history" className="section bg-gray-950">
        <div className="container">
          <h2 className="font-bold text-3xl flex items-center mb-8">
            <Calendar className="h-7 w-7 text-purple-500 mr-2" />
            20 Years of Football History
          </h2>
          
          <div className="bg-gray-800 rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Explore the Rich History</h3>
                <p className="text-gray-300 mb-6">
                  Dive into the last two decades of football excellence. Discover how the top clubs evolved, 
                  the legendary players who defined eras, and the trophy-laden journeys that shaped modern football.
                </p>
                <Link to="/history" className="btn btn-primary inline-flex items-center">
                  <Info className="mr-2 h-5 w-5" /> 
                  Explore Timeline
                </Link>
              </div>
              <div className="relative h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-lg"></div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="font-bold text-6xl text-white mb-2">20</div>
                    <div className="text-xl text-gray-200">Years of Football Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;