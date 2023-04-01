import { MovieCard } from './movie-card'
import { ScrollBar } from './ui/scroll-area'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { useEffect, useState } from 'react'

export interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const NowPlaying = () => {
  const [data, setData] = useState<IMovie[]>([])
  const fetchMovieNowPlaying = async () => {
    try {
      const res = await fetch('/api/movie/getNowPlaying')
      const result = await res.json()
      if (result && result.page) {
        setData(result.results)
      }
    } catch (error) {}
  }
  useEffect(() => {
    fetchMovieNowPlaying()
  }, [])
  return (
    <ScrollArea
      className="overflow-x-auto rounded-md border p-4"
      aria-orientation="vertical">
      <div className="grid grid-flow-col grid-cols-4 space-x-4 pb-4">
        {data.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  )
}
