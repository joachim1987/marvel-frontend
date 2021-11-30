import axios from 'axios'
import { useParams } from 'react-router'
import React, { useEffect, useState } from 'react'

const Charactercomic = () => {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  const characterId = params.characterId

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `http://localhost:3000/comics/${characterId}`,
        )

        console.log(response.data)
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
      {data.Character.map((Character) => {
        return (
          <div key={Character._id}>
            <p>{Character.comics}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Charactercomic
