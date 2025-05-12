import { getGifs } from '../../src/helpers/getGifs';
import type { Gif } from '../../src/models/Giphy';


describe(`Tests on "getiGifs" module / helper`, () => { 

    const category:string = 'Kittens';
    
    test(`"getGifs" function should return Gif[]`, async () => { 
        
        const gifs:Gif[] = await  getGifs(category);

        expect( gifs.length).toBeGreaterThan(0);
        expect( gifs[0]).toEqual(
            {
                id:     expect.any(String),
                title:  expect.any(String),
                url:    expect.any(String),
            }
        );

     });

 });