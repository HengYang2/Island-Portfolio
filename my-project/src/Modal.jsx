import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal({ open, onClose }) {
  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <div className=' bg-gray-600 min-h-full top-0 left-0 min-w-full fixed z-[999]'>a</div>
      <div className='z-[1000] relative bg-slate-600'> 
        THIS IS A MODAL
        <button className='' onClick={() => { onClose() }}>Close Modal</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}
