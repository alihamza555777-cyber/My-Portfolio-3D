import { useEffect, useRef, useState } from 'react';

// Generate star data outside of React render cycle
function generateStars() {
  return Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${0.5 + Math.random() * 1.5}s`,
    animationDelay: `${Math.random() * 0.5}s`,
    size: `${4 + Math.random() * 8}px`,
  }));
}

export default function StarSprinkles({ trigger }) {
  const [stars, setStars] = useState([]);
  const prevTrigger = useRef(false);

  useEffect(() => {
    // Only fire when trigger transitions from false -> true
    if (trigger && !prevTrigger.current) {
      setStars(generateStars());
      const timer = setTimeout(() => setStars([]), 2500);
      prevTrigger.current = true;
      return () => clearTimeout(timer);
    }
    if (!trigger) {
      prevTrigger.current = false;
    }
  }, [trigger]);

  if (stars.length === 0) return null;

  return (
    <div className="sprinkles-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-sprinkle"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
}
