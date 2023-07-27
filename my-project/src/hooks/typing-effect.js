import React, { useState, useEffect, useRef } from 'react'

export default function useTypingEffect(textToType, interKeyStrokeDurationInMs, clicked, setClicked, setIndicatorVisible, thirdVar, setSelectedQuestion) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPosition((value) => value + 1)
            currentPositionRef.current += 1;
            if(clicked == true) {
                return
            }
            if (currentPositionRef.current > textToType.length) {
                console.log('currentPositionRef', currentPositionRef.current);
                clearInterval(intervalId);
                setClicked(true)
                setIndicatorVisible(true)
            }
        }, interKeyStrokeDurationInMs);
        return () => {
            clearInterval(intervalId);
            setCurrentPosition(0);
            currentPositionRef.current = 0;
        }

    }, [interKeyStrokeDurationInMs, textToType, clicked]);

    return textToType.substring(0, currentPosition)
}

// if (clicked == true) {
//     currentPositionRef.current = textToType.length + 1;
// }