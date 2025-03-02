import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  features?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, icon, features }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
      <div className="flex items-start gap-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          {features && (
            <ul className="list-disc list-inside mb-4 text-gray-400">
              {features.map((feature, index) => (
                <li key={index} className="mb-1">{feature}</li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};