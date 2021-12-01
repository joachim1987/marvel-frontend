import { Link } from 'react-router-dom'
import marvel from '../images/Logo-Marvel-1.jpg'

const Header = () => {
  return (
    <div className="headerbloc">
      <div className="img">
        <img
          style={{ height: 100, marginBottom: 20 }}
          src={marvel}
          alt="logo marvel"
        />
      </div>
      <div className="menu">
        <div className="perso">
          <Link style={{ color: 'red' }} to="/">
            personnages
          </Link>
        </div>
        <div className="comics">
          <Link style={{ color: 'red' }} to="/comics">
            comics
          </Link>
        </div>
        <div className="favor">
          <Link style={{ color: 'red' }} to="/favoris">
            favoris
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
