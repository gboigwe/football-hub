import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, X, Trophy, Users, User, Menu } from 'lucide-react';
import { topClubs, allPlayers, coaches } from '../data';

interface SearchResult {
  id: string;
  name: string;
  type: 'club' | 'player' | 'coach';
  image?: string;
  subtitle: string;
  link: string;
}

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Search function
  const performSearch = (searchQuery: string): SearchResult[] => {
    console.log('=== SEARCH DEBUG ===');
    console.log('Search query:', searchQuery);
    console.log('Available topClubs:', topClubs);
    console.log('Available allPlayers:', allPlayers);
    console.log('Available coaches:', coaches);
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search clubs
    topClubs.forEach(club => {
      if (
        club.name.toLowerCase().includes(query) ||
        club.fullName.toLowerCase().includes(query) ||
        club.nickname.toLowerCase().includes(query) ||
        club.country.toLowerCase().includes(query)
      ) {
        searchResults.push({
          id: club.id,
          name: club.name,
          type: 'club',
          image: club.logo,
          subtitle: `${club.country} • ${club.league}`,
          link: `/club/${club.id}`
        });
      }
    });

    // Search players
    allPlayers.forEach(player => {
      if (
        player.name.toLowerCase().includes(query) ||
        player.nationality.toLowerCase().includes(query) ||
        player.position.toLowerCase().includes(query) ||
        player.clubName.toLowerCase().includes(query)
      ) {
        searchResults.push({
          id: player.id,
          name: player.name,
          type: 'player',
          image: player.image,
          subtitle: `${player.position} • ${player.clubName}`,
          link: `/player/${player.id}`
        });
      }
    });

    // Search coaches
    coaches.forEach(coach => {
      if (
        coach.name.toLowerCase().includes(query) ||
        coach.nationality.toLowerCase().includes(query)
      ) {
        const currentClub = coach.clubs.find(club => !club.left);
        searchResults.push({
          id: coach.id,
          name: coach.name,
          type: 'coach',
          image: coach.image,
          subtitle: `Coach • ${currentClub ? currentClub.clubName : 'Free Agent'}`,
          link: `/coach/${coach.id}`
        });
      }
    });

    // Sort results by relevance (exact matches first)
    return searchResults.sort((a, b) => {
      const aExact = a.name.toLowerCase().startsWith(query);
      const bExact = b.name.toLowerCase().startsWith(query);
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
      return a.name.localeCompare(b.name);
    }).slice(0, 8); // Limit to 8 results
  };

  // Handle input change
  useEffect(() => {
    const searchResults = performSearch(query);
    setResults(searchResults);
    setSelectedIndex(-1);
    setIsOpen(query.length > 0);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            navigate(results[selectedIndex].link);
            setIsOpen(false);
            setQuery('');
          }
          break;
        case 'Escape':
          setIsOpen(false);
          inputRef.current?.blur();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, navigate]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (result: SearchResult) => {
    navigate(result.link);
    setIsOpen(false);
    setQuery('');
  };

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'club':
        return <Trophy className="h-4 w-4 text-yellow-500" />;
      case 'player':
        return <Users className="h-4 w-4 text-blue-500" />;
      case 'coach':
        return <User className="h-4 w-4 text-green-500" />;
      default:
        return <Search className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search clubs, players, coaches..."
          className="w-full bg-gray-800 text-white rounded-full py-2 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          onFocus={() => query && setIsOpen(true)}
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 hover:text-white transition"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <>
              <div className="px-4 py-2 border-b border-gray-700">
                <span className="text-sm text-gray-400">
                  {results.length} result{results.length !== 1 ? 's' : ''} found
                </span>
              </div>
              {results.map((result, index) => (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => handleResultClick(result)}
                  className={`w-full flex items-center px-4 py-3 hover:bg-gray-800 transition-colors ${
                    index === selectedIndex ? 'bg-gray-800' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    {result.image ? (
                      <img
                        src={result.image}
                        alt={result.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                        {getIcon(result.type)}
                      </div>
                    )}
                    <div className="flex-1 text-left">
                      <div className="font-medium text-white">{result.name}</div>
                      <div className="text-sm text-gray-400">{result.subtitle}</div>
                    </div>
                    <div className="flex items-center">
                      {getIcon(result.type)}
                    </div>
                  </div>
                </button>
              ))}
            </>
          ) : query ? (
            <div className="px-4 py-8 text-center">
              <Search className="h-8 w-8 text-gray-500 mx-auto mb-2" />
              <p className="text-gray-400">No results found for "{query}"</p>
              <p className="text-sm text-gray-500 mt-1">
                Try searching for clubs, players, or coaches
              </p>
            </div>
          ) : (
            <div className="px-4 py-8 text-center">
              <Search className="h-8 w-8 text-gray-500 mx-auto mb-2" />
              <p className="text-gray-400">Start typing to search</p>
              <div className="mt-3 space-y-1">
                <p className="text-xs text-gray-500">• Clubs: Manchester United, Barcelona, Real Madrid</p>
                <p className="text-xs text-gray-500">• Players: Messi, Ronaldo, Mbappé</p>
                <p className="text-xs text-gray-500">• Coaches: Pep Guardiola, Klopp, Ancelotti</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Updated Navbar component with enhanced search
export const EnhancedNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold">FootballHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link hover:text-blue-400 transition">Home</Link>
            <Link to="/#clubs" className="nav-link hover:text-blue-400 transition">Top Clubs</Link>
            <Link to="/#players" className="nav-link hover:text-blue-400 transition">Players</Link>
            <Link to="/#history" className="nav-link hover:text-blue-400 transition">History</Link>
          </div>

          {/* Enhanced Search - Desktop */}
          <div className="hidden md:block w-80">
            <SearchComponent />
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link hover:text-blue-400 transition">Home</Link>
              <Link to="/#clubs" className="nav-link hover:text-blue-400 transition">Top Clubs</Link>
              <Link to="/#players" className="nav-link hover:text-blue-400 transition">Players</Link>
              <Link to="/#history" className="nav-link hover:text-blue-400 transition">History</Link>
              
              {/* Enhanced Search - Mobile */}
              <div className="mt-4">
                <SearchComponent />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default SearchComponent;
