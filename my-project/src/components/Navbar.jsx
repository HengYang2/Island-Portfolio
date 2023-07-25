import React from 'react'

export default function Navbar() {
    return (
        <div className='top-0 left-0 fixed min-h-full w-36 flex flex-col gap-2 justify-start items-center'>
            <div className='top-0 left-0 absolute min-h-full min-w-full bg-gray-500 opacity-40 z-999'></div>
            <div className=' mt-2 flex flex-col gap-0 justify-center items-center z-1000 relative'>
                <a href="" className='info-icon'>LinkedIn</a>
                <a href="" className='info-icon'>Resume</a>
                <a href="" className='info-icon'>Github</a>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center z-1000 relative'>
                <button className='teleport-icon'>H</button>
                <button className='teleport-icon'>C</button>
                <button className='teleport-icon'>Te</button>
                <button className='teleport-icon'>Tes</button>
                <button className='teleport-icon'>P</button>
            </div>
        </div>
    )
}
