import { useState } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>    
      {/* <button onClick={() => {setIsOpen(true)}}>Open Modal</button>
      <Modal open={isOpen} onClose={() => {setIsOpen(false)}} /> */}
    </>
  )
}

export default App
