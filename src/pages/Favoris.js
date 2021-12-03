import { Link } from 'react-router-dom'

const Favoris = () => {
  const obj = JSON.parse(sessionStorage.getItem('favoris'))

  return obj ? (
    <div className="container">
      {obj.map((character, index) => {
        return (
          <>
            <div key={index} className="card">
              <h3>{character.name}</h3>

              <Link to={`/charactercomic/${character._id}`}>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt=""
                />
              </Link>

              <h3 className="descriptionperso">{character.description}</h3>
            </div>
          </>
        )
      })}
    </div>
  ) : (
    <div>aucun favori sélectionné !</div>
  )
}

export default Favoris
