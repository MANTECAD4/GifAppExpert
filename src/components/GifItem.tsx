import type { Gif } from '../models/Giphy';
type Props = Gif & {

}

export const GifItem = ( { title, url }:Props ) => {
  return (
    <div className="bg-white m-2 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer p-2 max-w-xs">
      <img
        src={url}
        alt={title}
        className="w-full h-auto rounded-xl"
      />
      <p className="mt-2 text-center text-sm font-semibold text-gray-700">
        {title}
      </p>
    </div>
  )
}
