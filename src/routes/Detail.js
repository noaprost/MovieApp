import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()

    console.log(json)
    setDetail(json.data.movie)
    setLoading(false)
  }

  useEffect(() => {
    getDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='detail-contatiner'>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h2 className="movie-tilte">{detail.title}</h2>
          <p>Year : {detail.year}</p>
          <p>Download Count : {detail.download_count}</p>
          <p>Like Count : {detail.like_count}</p>
          <p>Rating : {detail.rating}</p>
          <p>Runtime : {detail.runtime}</p>
          <p className="movie-description">{detail.description_full}</p>
        </div>
      )}
    </div>
  )
}

export default Detail
