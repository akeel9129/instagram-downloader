import React from 'react';
import Tabs from './Tabs';
import './Hero.css';

const Hero = ({ activeTab, setActiveTab, url, setUrl, handleDownload, downloadUrl, error }) => {
  return (
    <div className="hero-container">
      <header className="hero-header">
        <h1>Instagram Downloader</h1>
        <p className="subtitle">Download Videos, Photos, Reels, and Stories Anonymously</p>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="downloader">
          <input
            type="text"
            placeholder="Paste link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleDownload}>DOWNLOAD</button>
        </div>
        {downloadUrl && (
          <div className="download-section">
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer" download>
              Click Here to Download Your Media
            </a>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </header>
    </div>
  );
};

export default Hero;
