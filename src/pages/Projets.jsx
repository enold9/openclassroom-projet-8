import '../style/style.scss'
import { useState } from 'react'
import { useParams } from 'react-router'
import projetsData from '../data/projets.json'

function Projets() {
 const {id} = useParams()
  const projet = projetsData.find(p => p.id === id)

  const [currentImage, setCurrentImage] = useState(0)

  if (!projet) {
    return <div>Projet introuvable (id: {id})</div>
  }

  function previousImage() {
    setCurrentImage((prev) => (prev - 1 + projet.images.length) % projet.images.length)
  }

  function nextImage() {
    setCurrentImage((prev) => (prev + 1) % projet.images.length)
  }

  return (
    <div className='NOTRE-PROJET'>
      <h1>{projet.title}</h1>
      <p>{projet.description}</p>
      <div className='caroussel-container'>
                <div className='caroussel-btn-container flexMirror'>
                    <button className={`fa-solid fa-chevron-left caroussel-btn ${projet.images.length === 1 ? 'hidden' : ''}`} id='prev' onClick={previousImage}></button>
                    <button className={`fa-solid fa-chevron-right caroussel-btn ${projet.images.length === 1 ? 'hidden' : ''}`} id='nxt' onClick={nextImage}></button>
                </div>
                <span className={`caroussel-image-number ${projet.images.length === 1 ? 'hidden' : ''}`}>{currentImage + 1}/{projet.images.length}</span>
                <ul>
                    {projet.images.map((image, i)=>
                        <li key={i} className={`caroussel-img-container ${i === currentImage ? '' : 'hidden'}`}>
                            <img src={image} className='caroussel-img' alt={`img ${i + 1} de ${projet.title}`}/>
                        </li>
                    )}
                </ul>
            </div>
    </div>
  );
}

export default Projets;