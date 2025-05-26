import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Trophy } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <Trophy className="h-24 w-24 text-blue-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-300 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to exploring football's finest.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home className="mr-2 h-5 w-5" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;