import React, { useEffect, useState } from "react";
import './ChatbotComponent.css';

const ChatbotComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Prevent duplicate script loading
    if (!document.getElementById("chatbase-script")) {
      const script = document.createElement("script");
      script.id = "chatbase-script";
      script.src = "https://www.chatbase.co/embed.min.js";
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => console.log("Chatbot script loaded successfully.");
      script.onerror = (error) =>
        console.error("Error loading chatbot script:", error);
    }
  }, []);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsChatOpen((prev) => !prev)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        💬
      </button>

      {/* Chatbot Window */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "400px",
            height: "500px",
            zIndex: 1000,
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
          }}
        >
          {/* Embedded Chatbot Iframe */}
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/Tt5U-baaWAS1VE23abRoq"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Chatbot"
            style={{ borderRadius: "10px" }}
          ></iframe>

          {/* Close Button */}
          <button
            onClick={() => setIsChatOpen(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default ChatbotComponent;
