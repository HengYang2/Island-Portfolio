import React from 'react'

export default function imageModule(selectedQuestion) {
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


