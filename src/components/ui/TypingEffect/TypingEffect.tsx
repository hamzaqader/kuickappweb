'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
}

export default function TypingEffect({ 
  text, 
  speed = 100, 
  delay = 1000, 
  loop = true, 
  className = '' 
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Typing forward
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else if (!isDeleting && currentIndex === text.length) {
        // Finished typing, start deleting after delay
        if (loop) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, start typing again
        setIsDeleting(false);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, delay, loop]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
