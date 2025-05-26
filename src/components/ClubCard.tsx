import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Award } from 'lucide-react';
import { Club } from '../types';

interface ClubCardProps {
  club: Club;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  return (
    <Link to={`/club/${club.id}`} className="card group">
      <div 
        className="h-40 bg-cover bg-center" 
        style={{ backgroundImage: `url(${club.stadiumImage})` }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all">
          <img 
            src={club.logo} 
            alt={`${club.name} logo`}
            className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
          />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 group-hover:text-blue-400 transition">
          {club.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3">
          {club.country} • Est. {club.established}
        </p>
        
        <div className="flex justify-between text-sm">
          <div className="flex items-center">
            <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
            <span>{club.trophies.total} Trophies</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-blue-500 mr-1" />
            <span>{club.players.length} Players</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClubCard;