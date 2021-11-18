import { useEffect, useState } from 'react'
import axios from 'axios'

const Character = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/characters')
        setData(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.results.map((character) => {
        return (
          <div key={character._id}>
            <h2>{character.name}</h2>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            />
            <h3>{character.description}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Character