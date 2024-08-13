import React, { useEffect, useRef } from 'react';
import './AnimatedH3.css';

const AnimatedH3 = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const lines = text.split("\n");
        textRef.current.innerHTML = lines
            .map(line => `<div class="animated-h3">${line}</div>`)
            .join("");

        const animatedLines = textRef.current.querySelectorAll('.animated-h3');
        animatedLines.forEach((line, index) => {
            line.style.animationDelay = `${index * 0.5}s`; // Delay each line
        });
    }, [text]);

    return (
        <div className="h3-container">
            <div ref={textRef}></div>
        </div>
    );
};

export default AnimatedH3;
