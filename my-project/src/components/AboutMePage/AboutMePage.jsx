import React from 'react'
import { useState } from 'react'

export default function AboutMePage() {
    //Use state for toggling talking options:
    const [talkingOptions, setTalkingOptions] = useState(false)

    //Usestate to keep track of which option was chosen:
    const [selectedQuestion, setSelectedQuestion] = useState(0)

    //Conditionally render text based on selectedQuestion useState:
    function conditionallyRenderText() {
        switch (selectedQuestion) {
            case 'option1': 
            return <p onClick={() => {setSelectedQuestion('')}} className='relative bg-green-400 left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md'>Option1</p>
            case 'option2': 
            return <p onClick={() => {setSelectedQuestion('')}} className='relative bg-green-400 left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md'>Option2</p>
            case 'option3': 
            return <p onClick={() => {setSelectedQuestion('')}} className='relative bg-green-400 left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md'>Option3</p>
            default:
            return <p onClick={() => {setSelectedQuestion('')}} className='relative bg-green-400 left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md'></p>
        }

    }


    //Div for displaying text response from npc:
    return (
        <div className='absolute top-0 left-0 w-full h-full pt-16'>
            <div className='bg-white w-40 h-36 ml-90 mt-40 absolute flex flex-col justify-center gap-1 items-center border border-black rounded-md'>
                <button className='text-option' id='option1' onClick={e => {setSelectedQuestion(`${e.target.id}`)}}>Who are you?</button>
                <button className='text-option' id='option2' onClick={e => {setSelectedQuestion(`${e.target.id}`)}}>Where am I?</button>
                <button className='text-option' id='option3' onClick={e => {setSelectedQuestion(`${e.target.id}`)}}>What do you do for fun?</button>
            </div>
            <div className='relative w-3/4 h-44 bg-white ml-40 mt-80 border border-black rounded-md flex flex-row justify-center gap-2'>
                <div className='left-.5 top-1.5 h-32 w-32 relative'>
                    <img src="../../../public/images/hengs_profile_picture.jpeg" alt="" className='relative border border-black rounded-md' />
                    <h1 className='bg-blue-500 border border-black rounded-md mt-1 text-center'>Heng Yang</h1>
                </div>
                {conditionallyRenderText()}
                {/* <div className='text-xl absolute mt-32 ml-96 bg-red-600 h-8 w-8 text-center'>{'>'}</div> */}
            </div>

        </div>
    )
}
