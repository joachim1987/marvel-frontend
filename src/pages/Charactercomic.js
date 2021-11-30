import axios from 'axios'
import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'

const Charactercomic = () => {
  const params = useParams()
  console.log('params ici ===>', params)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  const characterId = params.characterId

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:4000/comics/${characterId}`,
        )

        console.log('response ===>', response.data)
        setData(response.data)
        setIsLoading(false)
      }
      fetchData()
    } catch (error) {
      console.log(error.message)
    }
  }, [characterId])

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.comics.map((comic) => {
        return (
          <div>
            <h2>{comic.title}</h2>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt="comic"
            />
            <p>{comic.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Charactercomic
