import React from 'react';
import './Tabs.css';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Video', 'Photo', 'Reels', 'Story'];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => setActiveTab(tab)}
        >
          {tab} Downloader
        </button>
      ))}
    </div>
  );
};

export default Tabs;
