import { IMovie } from './now-playing'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

interface Props {
  movie: IMovie
}
export const MovieCard = (props: Props) => {
  return (
    <div className="w-[150px] cursor-pointer space-y-3">
      <AspectRatio ratio={3 / 4}>
        <Image
          src={`${process.env.NEXT_PUBLIC_MOVIE_POST_URL}/${props.movie.poster_path}`}
          alt={props.movie.title}
          // fill
          className="object-cover transition-all hover:scale-105"
          height="220"
          width="330"
        />
      </AspectRatio>
    </div>
  )
}
