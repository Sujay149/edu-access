import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'aichatbot';
    document.body.appendChild(chatbotContainer);

    const script = document.createElement('script');
    script.defer = true;
    script.type = 'module';
    script.src = 'https://aichatbot.sendbird.com/index.js';

    window.chatbotConfig = {
      apiHost: 'https://api-cf-ap-8.sendbird.com',
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(chatbotContainer);
      document.body.removeChild(script);
    };
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    const chatbotElement = document.getElementById('aichatbot');
    if (chatbotElement) {
      chatbotElement.style.display = isOpen ? 'none' : 'block';
    }
  };

  return (
    <div className="chatbot-wrapper">
      <button 
        onClick={toggleChatbot} 
        className="chatbot-toggle"
      >
        {isOpen ? 'Close Chatbot' : 'Open Chatbot'}
      </button>
    </div>
  );
};

export default Chatbot;
