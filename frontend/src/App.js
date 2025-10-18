import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Instructions from './components/Instructions';
import Features from './components/Features';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('Video');
  const [url, setUrl] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setError('');
    setDownloadUrl('');

    try {
      const response = await fetch('http://localhost:3001/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to download');
      }

      const data = await response.json();
      setDownloadUrl(data.downloadUrl);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <Hero
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        url={url}
        setUrl={setUrl}
        handleDownload={handleDownload}
        downloadUrl={downloadUrl}
        error={error}
      />
      <Instructions />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
