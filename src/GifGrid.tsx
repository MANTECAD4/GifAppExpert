import { getGifs } from "./helpers/fetchGifs.ts"

type Props = {
    category:string
} 

export const GifGrid =  ( { category }:Props ) => {
    getGifs(category);
    return (
        <>
            <h2>{ category }</h2>
            <li key={ category }>{ category }</li> 
        </>
        // <div key={ category }>
        
        // </div>
  )
}
