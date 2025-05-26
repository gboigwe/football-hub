# FootballHub - Football Club Information Platform

A comprehensive platform showcasing detailed information about the world's top football clubs, players, and coaches. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Club Profiles**: Detailed information about top football clubs including history, achievements, and current statistics
- **Player Database**: Comprehensive player profiles with performance statistics, career history, and analysis
- **Coach Insights**: Detailed information about managers including tactical approaches and career achievements
- **Historical Timeline**: 20-year history of major events and achievements for each club
- **Responsive Design**: Fully responsive interface that works seamlessly across all devices

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React (for icons)
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gboigwe/football-hub.git
cd football-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/        # Reusable UI components
├── data/             # Static data files
├── pages/            # Page components
├── types/            # TypeScript type definitions
└── App.tsx           # Main application component
```

## Components

- **ClubCard**: Displays club overview with key statistics
- **PlayerCard**: Shows player information and performance metrics
- **StatCard**: Reusable component for displaying statistics
- **Layout**: Main layout wrapper with navigation and footer
- **Navbar**: Navigation component with search functionality
- **Footer**: Footer component with site links and newsletter signup

## Pages

- **Dashboard**: Landing page with overview of top clubs and players
- **ClubDetails**: Detailed club information and statistics
- **PlayerDetails**: Comprehensive player statistics and career information
- **CoachDetails**: Manager profiles and tactical analysis

## Data Structure

The platform uses TypeScript interfaces for type safety:

- `Club`: Club information and statistics
- `Player`: Player details and performance metrics
- `Coach`: Manager information and tactical approach
- `Trophy`: Achievement records

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Data sourced from various football statistics providers
- Stadium and player images from Pexels
- Icons from Lucide React
