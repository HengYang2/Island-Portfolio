import React from 'react'
import { useState } from 'react'

export default function AboutMePage() {
    //Use state for toggling talking options:
    const [talkingOptions, setTalkingOptions] = useState(false)

    //Div for player talking interaction choices:

    //Div for displaying text response from npc:
    return (
        <div className='absolute top-0 left-0 w-full h-full pt-16'>

            <div className='relative w-3/4 h-44 bg-white ml-40 mt-80 border border-black rounded-md flex flex-row justify-center gap-2'>
                <div className='left-.5 top-1.5 h-32 w-32 relative'>
                    <img src="../../../public/images/hengs_profile_picture.jpeg" alt="" className='relative border border-black rounded-md' />
                    <h1 className='bg-blue-500 border border-black rounded-md mt-1 text-center'>Heng Yang</h1>
                </div>
                <p className='relative bg-green-400 left-0 w-4/5 top-1.5 h-40 p-2 border border-black rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus asperiores, eius omnis ratione itaque ipsam similique dolor magni nesciunt voluptatum exercitationem magnam esse quos animi ducimus alias dolores perspiciatis debitis?</p>
                {/* <div className='text-xl absolute mt-32 ml-96 bg-red-600 h-8 w-8 text-center'>{'>'}</div> */}
            </div>

        </div>
    )
}
