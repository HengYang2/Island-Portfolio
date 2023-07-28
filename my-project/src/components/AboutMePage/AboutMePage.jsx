import React from 'react'
import { useState, useEffect } from 'react'

//Response Module:
import responseModule from './modules/responseModule'
//Image Module:
import imageModule from './modules/imageModule'
//Typewriter
import useTypingEffect from '../../hooks/typing-effect'

export default function AboutMePage() {

    //UseState for toggling talking options:
    const [questionsVisable, setQuestionsVisable] = useState(false)

    //UseState to keep track of which option was chosen:
    // const [selectedQuestion, setSelectedQuestion] = useState('')


    const [textCollection, setTextCollection] = useState(responseModule(''));

    const [collectionIndex, setCollectionIndex] = useState(0);

    const [textSpeed, setTextSpeed] = useState(50);

    const [indicatorVisible, setIndicatorVisible] = useState(false);


    const text = useTypingEffect(textCollection, collectionIndex, textSpeed, setIndicatorVisible, setQuestionsVisable)


    //For handling user clicks and conditional rendering of components:
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
            setTextSpeed(5)
        }
    }

    //Conditionally render questions based on the questionsVisable useState:
    function toggleQuestionsVisable() {
        return questionsVisable ?
            <div className='w-40 h-36 ml-90 mt-40 absolute flex flex-col justify-center gap-1 items-center'>
                <div className='bg-yellow-100 absolute w-full h-full border border-black rounded-md box-shadow animate-subtlePulse -z-1 opacity-70'></div>
                <button className='text-option' id='option1' onClick={e => { setQuestionsVisable(false); setTextCollection(responseModule('option1')); setCollectionIndex(0); setTextSpeed(50) }}>Who are you?</button>
                <button className='text-option' id='option2' onClick={e => { setQuestionsVisable(false); setTextCollection(responseModule('option2')); setCollectionIndex(0); setTextSpeed(50) }}>Where am I?</button>
                <button className='text-option' id='option3' onClick={e => { setQuestionsVisable(false); setTextCollection(responseModule('option3')); setCollectionIndex(0); setTextSpeed(50) }}>What do you do for fun?</button>
            </div> :
            <></>;
    }


    //Conditionally render 'Press to Continue' button, based on if the text is done displaying:
    function conditionalIndicator() {
        return indicatorVisible ? <h2 className='bg-yellow-300 border border-black rounded-md w-16 h-8 text-xs absolute text-center ml-101 mt-102 z-50 animate-upDown'>{'Click To Continue'}</h2> : <></>;
    }


    //Div for displaying text response from npc:
    return (
        <div className='absolute top-0 left-0 w-full h-full pt-16'>
            {conditionalIndicator()}
            {toggleQuestionsVisable()}
            <div className='relative w-3/4 h-44 ml-40 mt-80 flex flex-row justify-center gap-2'>
                <div className='bg-yellow-100 absolute w-full h-full border border-black rounded-md box-shadow animate-subtlePulse -z-1 opacity-70'></div>
                <div className='left-.5 top-1.5 h-32 w-32 relative'>
                    {imageModule(responseModule('option1'))}
                    <h1 className='bg-white border border-black rounded-md mt-1.5 text-center box-shadow'>Heng Yang</h1>
                </div>
                <p onClick={() => { nextText() }} className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow'>{text}</p>
            </div>

        </div>
    )
}

//Do i need to click on the div 1 or twice?
//If I click on it twice, how do I stop the previous word from loading
    //How do I tell it stop?




//Whenever text finishes do this:
    //Show indicator
    //When clicked: start a new line of text and wait for it to finish; then show indicator.