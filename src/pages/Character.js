import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Character = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [skip, setSkip] = useState(0)
  const [page, setPage] = useState(1)
  const [searchtitle, setSearchtitle] = useState('')
  const [favoris, setFavoris] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/characters?skip=${skip}&name=${searchtitle}`,
        )
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [skip, searchtitle])

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="container">
      <div className="searchbar">
        <input
          type="text"
          onChange={(event) => setSearchtitle(event.target.value)}
          placeholder="chercher votre perso marvel préféré"
        />
      </div>
      <div className="skipPage">
        {page > 1 ? (
          <div className="previousbutton">
            <button
              onClick={() => {
                setSkip(skip - 100)
                setPage(page - 1)
              }}
            >
              page précédente
            </button>
          </div>
        ) : (
          <div></div>
        )}
        <div className="pagenumber">{page}</div>

        {page < 15 ? (
          <div className="nextbutton">
            <button
              onClick={() => {
                setSkip(skip + 100)
                setPage(page + 1)
              }}
            >
              page suivante
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {data.results.map((character) => {
          return (
            <div key={character._id}>
              <button
                className="favbutton"
                onClick={() => {
                  const newFav = [...favoris]
                  newFav.push(character)
                  setFavoris(newFav)
                  sessionStorage.setItem('favoris', JSON.stringify(favoris))
                  alert(
                    `le personnage${character.name} à bien été ajouté à vos favoris.`,
                  )
                }}
              >
                Ajout aux favoris
              </button>
              <Link to={`/comics/${character._id}`}>
                <h2 className="nameperso">{character.name}</h2>
                <img
                  className="imgperso"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt="character"
                />
                <h3 className="descriptionperso">{character.description}</h3>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Character
