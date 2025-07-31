import React from 'react';
import GoogleAdSense from './GoogleAdSense';

interface AdSidebarProps {
  className?: string;
}

const AdSidebar: React.FC<AdSidebarProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Top Ad Unit */}
      <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
        <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
        <GoogleAdSense
          client="ca-pub-6435811821902528" // Replace with your AdSense client ID
          slot="3820721663" // Replace with your ad slot ID
          style={{
            display: 'block',
            width: '100%',
            height: '250px'
          }}
        />
      </div>
      
    </div>
  );
};

export default AdSidebar;