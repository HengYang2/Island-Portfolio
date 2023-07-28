import React, { useState } from 'react'
import useTypingEffect from '../../hooks/typing-effect'


export default function PortfolioPage() {


  const [textCollection, setTextCollection] = useState(["Paragraph 1", "Paragraph 2", 'Paragraph 3']);

  const [collectionIndex, setCollectionIndex] = useState(0);

  const [textSpeed, setTextSpeed] = useState(200);

  const [indicatorVisible, setIndicatorVisible] = useState(false);


  const text = useTypingEffect(textCollection, collectionIndex, textSpeed, setIndicatorVisible)


  function nextText() {
    if (indicatorVisible == true) {
      if (collectionIndex == textCollection.length - 1) {
        //Create a div thats unclickable
        //Render questions
      } else {
        setCollectionIndex(collectionIndex + 1)
      }
      setIndicatorVisible(false)
      setTextSpeed(200)
    } else {
      setTextSpeed(10)
    }
  }

  function visible() {
    return indicatorVisible ? <div className='bg-green-600 w-96 h-96 ml-96 mt-96'>INDICATOR</div> : <></>;
  }

  return (
    <div className='absolute top-0 left-0 w-full h-full'>
      <button onClick={() => { nextText() }} className='ml-101 bg-blue-400 w-60 h-60 absolute'>Click me</button>
      <h1 className='text-center bg-red-500 w-96 h96 ml-44'>{text}</h1>
      {visible()}
    </div>
  )
}
