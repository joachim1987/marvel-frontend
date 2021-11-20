import { useEffect, useState } from 'react'
import axios from 'axios'

const Comics = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/comics')
        console.log(response.data)
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error.response)
      }
    }
    fetchData()
  }, [])

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.results.map((comic) => {
        return (
          <div key={comic._id}>
            <h2>{comic.title}</h2>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            />
            <h3>{comic.description}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Comics
