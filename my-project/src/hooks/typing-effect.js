import React, { useState, useEffect, useRef } from 'react'

export default function useTypingEffect(textToType, interKeyStrokeDurationInMs, setClicked) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);
    let counter = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPosition((value) => value + 1)
            currentPositionRef.current += 1;
            if (currentPositionRef.current > textToType.length) {
                clearInterval(intervalId);
                setClicked(true)
                console.log("All done typing!");
            }
        }, interKeyStrokeDurationInMs);
        return () => {
            clearInterval(intervalId);
            setCurrentPosition(0);
            currentPositionRef.current = 0;
        }

    }, [interKeyStrokeDurationInMs, textToType]);
    
    return textToType.substring(0, currentPosition)
}
