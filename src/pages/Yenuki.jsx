import { useState } from "react";
import NavigationBar from "../components/NavigationBar";

export default function Yenuki() {
  const [clicks, setClicks] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [showEmoji, setShowEmoji] = useState(true);

  const handleEmojiClick = () => {
    setClicks(clicks + 1);
    setRotation(rotation + 360);
    setShowEmoji(!showEmoji);
  };

  const handleReset = () => {
    setClicks(0);
    setRotation(0);
    setShowEmoji(true);
  };

  return (
      <div style={{ 
        textAlign: 'center', 
        padding: '40px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ 
          fontSize: '3rem',
          marginBottom: '20px',
          color: '#0051ff'
        }}>
          මෝඩ Yenuki
        </h1>
        
        <div style={{ margin: '30px 0' }}>
          <img 
            src={showEmoji ? "/emoji.jpg" : "/donkey.jpg"}
            alt={showEmoji ? "Emoji" : "Donkey"}
            onClick={handleEmojiClick}
            style={{ 
              width: showEmoji ? '200px' : '300px',
              height: 'auto',
              cursor: 'pointer',
              transform: `rotate(${rotation}deg)`,
              transition: 'all 0.5s ease',
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              userSelect: 'none'
            }}
          />
          {!showEmoji && (
            <p style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              color: '#f700ff',
              marginTop: '20px'
            }}>
              බූරු පැටියා
            </p>
          )}
        </div>

        <p style={{ 
          marginTop: '30px',
          fontSize: '0.9rem',
          color: '#888'
        }}>
          Click the emoji to see magic! ✨
        </p>
      </div>
  );
}