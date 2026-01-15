import { useState } from "react";
import NavigationBar from "../components/NavigationBar";

export default function Yenuki() {
  const [clicks, setClicks] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [size, setSize] = useState(200);

  const handleEmojiClick = () => {
    setClicks(clicks + 1);
    setRotation(rotation + 360);
    setSize(size === 200 ? 300 : 200);
  };

  const handleReset = () => {
    setClicks(0);
    setRotation(0);
    setSize(200);
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
            src="/emoji.jpg" 
            alt="Emoji" 
            onClick={handleEmojiClick}
            style={{ 
              width: `${size}px`,
              height: 'auto',
              cursor: 'pointer',
              transform: `rotate(${rotation}deg)`,
              transition: 'all 0.5s ease',
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              userSelect: 'none'
            }}
          />
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