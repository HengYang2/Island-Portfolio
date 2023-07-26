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
      <img src='https://img.freepik.com/premium-photo/summer-sand-beach-with-coconut-palm-leaves-foreground_252965-1106.jpg' className='top-0 left-0 absolute h-full w-full -z-1 opacity-100'/>
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
