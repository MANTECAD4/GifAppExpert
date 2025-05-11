import { useEffect, useState } from "react";
import type { Gif } from '../models/Giphy';
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category:string ) => {
  
    const [gifs, setGifs] = useState<Gif[]>([]);

    const [isLoading, setIsLoading] = useState(true);
    
    const loadGifs = async () => {
        const newGifs:Gif[] = await  getGifs(category);
        setGifs(newGifs);
        setIsLoading(false)
    }
    
    useEffect( ( ) => {
        
        loadGifs(); 
    
    }, [category]);

    return {
        gifs,
        isLoading
    }
}
 