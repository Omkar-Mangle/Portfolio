import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-1">
      <div className="text-center">
        <span className="text-lg font-medium text-blue-400">{skill}</span>
      </div>
    </div>
  );
};