import React from 'react';
import { Check, X } from 'lucide-react';

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

const ProsCons: React.FC<ProsConsProps> = ({ pros, cons }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-success-50 border border-success-200 rounded-lg p-5">
        <h3 className="flex items-center text-success-800 font-medium mb-4">
          <Check className="h-5 w-5 mr-2 text-success-600" />
          Pros
        </h3>
        <ul className="space-y-2">
          {pros.map((pro, index) => (
            <li key={index} className="flex">
              <Check className="h-5 w-5 mr-2 text-success-600 flex-shrink-0" />
              <span className="text-gray-800">{pro}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-error-50 border border-error-200 rounded-lg p-5">
        <h3 className="flex items-center text-error-800 font-medium mb-4">
          <X className="h-5 w-5 mr-2 text-error-600" />
          Cons
        </h3>
        <ul className="space-y-2">
          {cons.map((con, index) => (
            <li key={index} className="flex">
              <X className="h-5 w-5 mr-2 text-error-600 flex-shrink-0" />
              <span className="text-gray-800">{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProsCons;