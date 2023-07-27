import React from 'react'
import { useState } from 'react'

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
    const [selectedQuestion, setSelectedQuestion] = useState('')

    //UseState to check if the dialog div has been clicked:
    const [clicked, setClicked] = useState(false)

    //A function that will type each letter out individually of a string.
    const text = useTypingEffect(responseModule(selectedQuestion), 50, setClicked)

    //Conditionally render questions based on the questionsVisable useState:
    function toggleQuestionsVisable() {
        return questionsVisable ?
            <div className='w-40 h-36 ml-90 mt-40 absolute flex flex-col justify-center gap-1 items-center'>
                <div className='bg-yellow-100 absolute w-full h-full border border-black rounded-md box-shadow animate-subtlePulse -z-1 opacity-70'></div>
                <button className='text-option' id='option1' onClick={e => { setQuestionsVisable(false); setSelectedQuestion('option1'); setClicked(false) }}>Who are you?</button>
                <button className='text-option' id='option2' onClick={e => { setQuestionsVisable(false); setSelectedQuestion('option2'); setClicked(false) }}>Where am I?</button>
                <button className='text-option' id='option3' onClick={e => { setQuestionsVisable(false); setSelectedQuestion('option3'); setClicked(false) }}>What do you do for fun?</button>
            </div> :
            <></>;
    }

    //Conditionally render P tag: One has the text being typed out, the other has the text instantly displayed:
    function conditionalP() {
        if (clicked == true) {
            return <p onClick={() => { setClicked(true); setQuestionsVisable(true); }} className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow'>{responseModule(selectedQuestion)}</p>
        } else {
            return <p onClick={() => { setClicked(true) }} className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow'>{text}</p>
        }
    }

    //Div for displaying text response from npc:
    return (
        <div className='absolute top-0 left-0 w-full h-full pt-16'>
            <h1 className='bg-red-300 w-8 h-8 absolute text-center ml-101 mt-102 z-50 animate-upDown'>{'>'}</h1>
            {toggleQuestionsVisable()}
            <div className='relative w-3/4 h-44 ml-40 mt-80 flex flex-row justify-center gap-2'>
                <div className='bg-yellow-100 absolute w-full h-full border border-black rounded-md box-shadow animate-subtlePulse -z-1 opacity-70'></div>
                <div className='left-.5 top-1.5 h-32 w-32 relative'>
                    {imageModule(selectedQuestion)}
                    <h1 className='bg-white border border-black rounded-md mt-1.5 text-center box-shadow'>Heng Yang</h1>
                </div>
                {conditionalP()}
            </div>

        </div>
    )
}