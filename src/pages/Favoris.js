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

              <Link to={`/albums/${character._id}`}>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt=""
                />
              </Link>

              <p>{character.description}</p>
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
