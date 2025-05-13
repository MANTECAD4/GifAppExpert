import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { screen, renderHook, waitFor } from '@testing-library/react';


describe(`Tests on "useFetchGifs.ts" custom hook`, () => { 
    

    const category = 'Kittens';
    
    test('Gifs should be an empty array and isLoading should be true at the beginig', () => { 
        
        const { result } = renderHook( () => useFetchGifs(category) );
        const { gifs, isLoading } = result.current;
        expect(gifs).toHaveLength(0);
        expect(isLoading).toBeTruthy();

     });
    
    test('Gifs should be a non-empty array of images, and isLoading should be false after de API request', async () => { 
        
        const { result } = renderHook( () => useFetchGifs(category) );

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );
        const { gifs, isLoading } = result.current;
        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        
     });

 });