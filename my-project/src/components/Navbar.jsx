import React from 'react'

export default function Navbar() {
    return (
        <div className='top-0 left-0 fixed min-h-full w-32 flex flex-col gap-2 justify-start items-center'>
            <div className='top-0 left-0 absolute min-h-full min-w-full bg-black opacity-60 z-999'></div>
            <div className=' mt-2 flex flex-col gap-0 justify-center items-center z-1000 relative'>
                <a href="" className='info-icon'>LinkedIn</a>
                <a href="" className='info-icon'>Resume</a>
                <a href="" className='info-icon'>Github</a>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center z-1000 relative'>
                <button className='teleport-icon group'> H <span className='icon-tooltip group-hover:scale-100'>About Me</span> </button>
                <button className='teleport-icon group'> C <span className='icon-tooltip group-hover:scale-100'>Portfolio</span> </button>
                <button className='teleport-icon group'> F <span className='icon-tooltip group-hover:scale-100'>Tech Stack</span> </button>
                <button className='teleport-icon group'> B <span className='icon-tooltip group-hover:scale-100'>Testimonials</span> </button>
                <button className='teleport-icon group'> P <span className='icon-tooltip group-hover:scale-100'>Get In Touch!</span> </button>
            </div>
        </div>
    )
}
