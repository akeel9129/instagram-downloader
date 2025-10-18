import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: 'Is there a limit to how many Instagram photos and videos I can download?',
      answer: 'There is no strict limit. However, please use the tool responsibly and avoid excessive requests.',
    },
    {
      question: 'What is an Instagram video downloader?',
      answer: 'It’s an online tool that lets you download Instagram photos, videos, and IGTV content for offline use.',
    },
    {
      question: 'Can I download Instagram Stories using this tool?',
      answer: 'Yes! Simply enter the Story URL and click download.',
    },
    {
      question: 'Do I need to install any software?',
      answer: 'No installation needed. InstaGram Downloader works entirely online—just paste the link and download directly from your browser.',
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.question}
            <span>{openFaq === index ? '-' : '+'}</span>
          </button>
          <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
