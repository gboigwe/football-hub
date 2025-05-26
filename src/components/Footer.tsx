import React from 'react';
import { Trophy, Mail, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">FootballHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for comprehensive football club information, featuring the world's top teams, players, and their histories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/#clubs" className="text-gray-400 hover:text-blue-400 transition">Top Clubs</Link></li>
              <li><Link to="/#players" className="text-gray-400 hover:text-blue-400 transition">Players</Link></li>
              <li><Link to="/#history" className="text-gray-400 hover:text-blue-400 transition">History</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Leagues</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Premier League</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">La Liga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Bundesliga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Serie A</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Ligue 1</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="h-5 w-5 text-gray-400" />
              <a href="mailto:info@footballhub.com" className="text-gray-400 hover:text-blue-400 transition">info@footballhub.com</a>
            </div>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates on your favorite clubs and players.
            </p>
            <div className="mt-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-md py-2 px-4 transition">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} FootballHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;