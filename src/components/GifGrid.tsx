import { useFetchGifs } from '../hooks/useFetchGifs.ts';
import { GifItem } from "./GifItem.tsx";


type Props = {
    category:string
} 


export const GifGrid =  ( { category }:Props ) => {

    const {gifs, isLoading} = useFetchGifs( category );

    return (
        <>
            <h2 key={ category }>{ category }</h2>
            {
                // isLoading 
                // ? (<h2>Cargando</h2>)
                // : (null)
                isLoading && (<p>Loading...</p>)

            }
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
