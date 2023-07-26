import React from 'react'
import { useState } from 'react'

export default function AboutMePage() {
    //Use useState for toggling talking options:
    const [questionsVisable, setQuestionsVisable] = useState(true)

    //Use useState to keep track of which option was chosen:
    const [selectedQuestion, setSelectedQuestion] = useState(0)

    //Conditionally render question options based on the questionsVisable useState:
    function toggleQuestionsVisable() {
        return questionsVisable ?
            <div className='w-40 h-36 ml-90 mt-40 absolute flex flex-col justify-center gap-1 items-center'>
                <div className='bg-yellow-100 absolute w-full h-full border border-black rounded-md box-shadow animate-subtlePulse -z-1 opacity-70'></div>
                <button className='text-option' id='option1' onClick={e => { setSelectedQuestion(`${e.target.id}`); setQuestionsVisable(false) }}>Who are you?</button>
                <button className='text-option' id='option2' onClick={e => { setSelectedQuestion(`${e.target.id}`); setQuestionsVisable(false) }}>Where am I?</button>
                <button className='text-option' id='option3' onClick={e => { setSelectedQuestion(`${e.target.id}`); setQuestionsVisable(false) }}>What do you do for fun?</button>
            </div> :
            <></>;
    }

    //Conditionally render text based on selectedQuestion useState:
    function conditionallyRenderText() {
        switch (selectedQuestion) {
            case 'option1':
                return <p onClick={() => { setSelectedQuestion(''); setQuestionsVisable(true) }} className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow'>My name is Heng Yang, I'm a software developer who enjoys creating games, making music and chilling on this island.</p>
            case 'option2':
                return <p onClick={() => { setSelectedQuestion(''); setQuestionsVisable(true) }} className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow'>You are on Paradise Island, a place created from my imagination. You are expereiencing a piece of my mind!</p>
            case 'option3':
                return <p onClick={() => { setSelectedQuestion(''); setQuestionsVisable(true) }} className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow'>I enjoy making music, 3d modeling, coding, and spending time with friends and family.</p>
            default:
                return <p onClick={() => { setSelectedQuestion(''); setQuestionsVisable(true) }} className='relative bg-white left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md box-shadow'>You seem a little lost stranger, is there something I can help you with?</p>
        }
    }

    //Function for adding a unique animation to image icon when a user selects a 
    //dialog option.
    function imageAnimationRender() {
        switch (selectedQuestion) {
            case 'option1':
                return <img src="../../../public/images/hengs_profile_picture.jpeg" alt="" className='relative border border-black rounded-md box-shadow animate-alert' />
            case 'option2':
                return <img src="../../../public/images/hengs_profile_picture.jpeg" alt="" className='relative border border-black rounded-md box-shadow animate-eyeLeftRight' />
            case 'option3':
                return <img src="../../../public/images/hengs_profile_picture.jpeg" alt="" className='relative border border-black rounded-md box-shadow animate-travelAcrossScreen' />
            default:
                return <img src="../../../public/images/hengs_profile_picture.jpeg" alt="" className='relative border border-black rounded-md box-shadow' />
        }
    }


    //Div for displaying text response from npc:
    return (
        <div className='absolute top-0 left-0 w-full h-full pt-16'>
            {toggleQuestionsVisable()}
            <div className='relative w-3/4 h-44 ml-40 mt-80 flex flex-row justify-center gap-2'>
            <div className='bg-yellow-100 absolute w-full h-full border border-black rounded-md box-shadow animate-subtlePulse -z-1 opacity-70'></div>
                <div className='left-.5 top-1.5 h-32 w-32 relative'>
                    {imageAnimationRender()}
                    <h1 className='bg-white border border-black rounded-md mt-1.5 text-center box-shadow'>Heng Yang</h1>
                </div>
                {conditionallyRenderText()}
                {/* <div className='text-xl absolute mt-32 ml-96 bg-red-600 h-8 w-8 text-center'>{'>'}</div> */}
            </div>

        </div>
    )
}
