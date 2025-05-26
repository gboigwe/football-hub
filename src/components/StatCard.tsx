import React, { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, description }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold mb-1">{value}</div>
          <div className="text-lg font-semibold text-gray-300 mb-1">{label}</div>
          <div className="text-sm text-gray-400">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;