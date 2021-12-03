import { useEffect, useState } from 'react'
import axios from 'axios'

const Comics = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [skip, setSkip] = useState(0)
  const [page, setPage] = useState(1)
  const [searchtitle, setSearchtitle] = useState('')
  const [favoris, setFavoris] = useState([])

  useEffect(() => {
    if (data) {
      data.results.sort((a, b) => {
        if (a < b) {
          return -1
        } else if (a > b) {
          return 1
        } else {
          return 0
        }
      })
    }
  }, [data])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics?skip=${skip}&title=${searchtitle}`,
        )
        console.log(response.data)
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error.response)
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
          placeholder="chercher votre comic marvel préféré"
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
        {data.results.map((comic) => {
          return (
            <div key={comic._id}>
              <button
                className="favbutton"
                onClick={() => {
                  const newFav = [...favoris]
                  newFav.push(comic)
                  setFavoris(newFav)
                  sessionStorage.setItem('favoris', JSON.stringify(favoris))
                  alert(
                    `le comic ${comic.title} à bien été ajouté à vos favoris.`,
                  )
                }}
              >
                Ajout aux Favoris
              </button>
              <h2 className="nameperso">({comic.title}</h2>
              <img
                className="imgcomics"
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt="comic"
              />
              <h3 className="descriptionperso">{comic.description}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Comics
