import { useState } from 'react'
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css'
import Modal from './Modal'
//Import components and viewpages:
import Navbar from './components/Navbar/Navbar'
import AboutMePage from './components/AboutMePage/AboutMePage';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import TechStackPage from './components/TechStackPage/TechStackPage';
import TestimonialsPage from './components/TestimonialsPage/TestimonialsPage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Router>
      <div className='top-0 left-0 absolute h-full w-full bg-blue-400 -z-1 opacity-100'></div>
      <Switch>
        <Route exact path='/'>
          <AboutMePage />
        </Route>
        <Route exact path='/aboutMePage'>
          <AboutMePage />
        </Route>
        <Route exact path='/portfolioPage'>
          <PortfolioPage />
        </Route>
        <Route exact path='/techStackPage'>
          <TechStackPage />
        </Route>
        <Route exact path='/testimonialsPage'>
          <TestimonialsPage />
        </Route>
        <Route exact path='/contactPage'>
          <ContactPage />
        </Route>
      </Switch>
      <Navbar />
    </Router>
  )
}

export default App
