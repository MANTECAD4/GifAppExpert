import type { Giphy, Gif } from '../models/Giphy';

export const getGifs =  async ( category:string ) => {

    const url:      string = 'https://api.giphy.com/v1/gifs/search';
    const api_key:  string = 'I1BEy7JMyEJSWoy03MU2Vq0sShZdllIo';
    const limit:    string = '10';
    const resp = await fetch(`${url}?api_key=${api_key}&q=${category}&limit=${limit}`);
    const { data }:Giphy = await resp.json();

    const gifs:Gif[] = data.map( img =>  ({
            id:img.id,
            title:img.title,
            url: img.images.fixed_height.url
        })
    )

    return gifs;

}
