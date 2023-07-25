import { useState } from 'react'
import './App.css'
import Modal from './Modal'
import Navbar from './components/Navbar'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-blue-300 top-0 left-0 h-full w-full'>    
      <Navbar/>
      {/* <button onClick={() => {setIsOpen(true)}}>Open Modal</button>
      <Modal open={isOpen} onClose={() => {setIsOpen(false)}} /> */}
    </div>
  )
}

export default App
