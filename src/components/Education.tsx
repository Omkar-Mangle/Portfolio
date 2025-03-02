import React from 'react';
import { BookOpen } from 'lucide-react';

interface EducationProps {
  degree: string;
  institution: string;
  year: string;
  grade?: string;
}

export const Education: React.FC<EducationProps> = ({ degree, institution, year, grade }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <BookOpen className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{degree}</h3>
          <p className="text-gray-400">{institution}</p>
          <p className="text-gray-500 mt-2">{year}</p>
          {grade && <p className="text-blue-400 mt-1">{grade}</p>}
        </div>
      </div>
    </div>
  );
};