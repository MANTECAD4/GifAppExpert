import { useEffect, useState } from "react"
import { getGifs } from "./helpers/getGifs.ts"
import { GifItem } from "./components/GifItem.tsx";
import type { Gif } from './models/Giphy';


type Props = {
    category:string
} 


export const GifGrid =  ( { category }:Props ) => {

    const [gifs, setGifs] = useState<Gif[]>([]);

    const loadGifs = async () => {
        const newGifs:Gif[] = await  getGifs(category);
        setGifs(newGifs);

    }
    
    useEffect( ( ) => {
       loadGifs(); 
    }, [category]);
    return (
        <>
            <h2 key={ category }>{ category }</h2>
            <div className="card-grid">
                {
                    gifs.map( gif => (
                        <GifItem 
                            key={ gif.id } 
                            { ...gif }
                        />
                    )) 
                    
                }

            </div>

        </>
  )
}
