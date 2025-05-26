import React from 'react';
import { Link } from 'react-router-dom';
import { Flag, Award } from 'lucide-react';
import { Player } from '../types';

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <Link to={`/player/${player.id}`} className="card group">
      <div className="h-56 bg-cover bg-center bg-gray-700 relative overflow-hidden">
        <img 
          src={player.image} 
          alt={player.name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
          <div className="flex items-center">
            <img 
              src={player.clubLogo} 
              alt={player.clubName}
              className="h-8 w-8 object-contain mr-2"
            />
            <span className="text-xs font-semibold">{player.position}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition">
          {player.name}
        </h3>
        
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <Flag className="h-4 w-4 mr-1" />
          <span>{player.nationality}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="bg-gray-700 rounded p-2 text-center">
            <div className="font-bold text-blue-400">{player.stats.goals}</div>
            <div>Goals</div>
          </div>
          <div className="bg-gray-700 rounded p-2 text-center">
            <div className="font-bold text-green-400">{player.stats.assists}</div>
            <div>Assists</div>
          </div>
          <div className="bg-gray-700 rounded p-2 text-center">
            <div className="font-bold text-yellow-400">{player.stats.appearances}</div>
            <div>Apps</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;