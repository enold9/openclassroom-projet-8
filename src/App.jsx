import './style/style.scss'
import moi from './assets/images/unnamed.webp'
import mongodb from './assets/images/MongoDB.jpg'
import express from './assets/images/express.jpg'
import node from './assets/images/node.png'
import react from './assets/images/react.png'
import javascript from './assets/images/javascript.png'
import css from './assets/images/css.png'
import html from './assets/images/html.png'
import projetsData from './data/projets.json'
import { Link } from 'react-router'
import ContactUs from './components/mail'

function App() {
  return (
    <div>
      <header>
        <div className="header">
          <img className='moi' src={moi} alt="ma tronche"/>
          <div className='header-text'>
            <h1>Eloïc Nold</h1>
            <p>22 ans, développeur fullstack</p>
          </div>
        </div>
      </header>
      <section id="competences">
        <div className="competences">
          <h2>Mes compétences</h2>
          <div>
            <div>
              <h3>frontend</h3>
              <ul>
                <li><p>HTML</p> <div><img src={html} alt='logo html'/></div></li>
                <li><p>CSS</p> <div><img src={css} alt='logo css'/></div></li>
                <li><p>JAVASCRIPT</p> <div><img src={javascript} alt='logo javascript'/></div></li>
                <li><p>REACT</p> <div><img src={react} alt='logo react'/></div></li>
              </ul>
            </div>
            <div>
              <h3>backend</h3>
              <ul>
                <li><p>NODE.JS</p> <div><img src={node} alt='logo node'/></div></li>
                <li><p>EXPRESS</p> <div><img src={express} alt='logo express'/></div></li>
                <li><p>MONGODB</p> <div><img src={mongodb} alt='logo mongodb'/></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="projets">
        <div className="projets">
          <h2>Mes projets</h2>
          <ul>
            {projetsData.map((projet) =>
              <li key={projet.id}> 
                <Link to={`/projet/${projet.id}`}> 
                  <h3>{projet.title}</h3>
                  <p>{projet.description}</p>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>
      <footer id='contact'>
        <div className='contact'>
          <h2>Me contacter</h2>
          <ContactUs/>
        </div>
      </footer>
    </div>
  );
}

export default App
