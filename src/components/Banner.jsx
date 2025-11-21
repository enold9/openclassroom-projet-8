import '../style/style.scss'
import { Link } from 'react-router'

function Banner() {
  return (
    <div className="banner">
      <p>Eloïc</p>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><a href='#competences'>competences</a></li>
        <li><a href='#projets'>projets</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>
    </div>
  );
}

export default Banner;
