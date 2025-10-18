import React from 'react';
import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h2>How to Download from Instagram?</h2>
      <div className="instructions-steps">
        <div className="instruction-step">
          <div className="step-number">1</div>
          <h3>Copy the URL</h3>
          <p>Open the Instagram app or website, find the content you want to download, and copy the URL.</p>
        </div>
        <div className="instruction-step">
          <div className="step-number">2</div>
          <h3>Paste the Link</h3>
          <p>Return to this website, paste the link into the input field, and click the "Download" button.</p>
        </div>
        <div className="instruction-step">
          <div className="step-number">3</div>
          <h3>Download</h3>
          <p>Your media will appear. Click the download button to save it to your device.</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
