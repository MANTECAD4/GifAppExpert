import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { GifGrid } from '../../src/components/GifGrid';

jest.mock('../../src/hooks/useFetchGifs');

describe(`Tests on "GifGrid.tsx" component`, () => { 
    
    const category:string = 'Kittens'
    const testGifs = [{
        title: "Cat Kittens GIF",
        url: "https://media4.giphy.com/media/v1.Y2lkPTFlMWVjMTVlN2poenVlNmpkdDFkYnA0bTE3MTRmY2k2aXhsMmtzbzl6cmtlZzlvMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wAmQh1YWjhGms/200.gif",
        id: "wAmQh1YWjhGms"
    }];

    test('Component behavior when the data is being loaded', () => { 

        const mockedUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;

        mockedUseFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });
        
        render( <GifGrid category={category}/> );
        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
        // screen.debug();
     });

    test('Component behavior when the data is already loaded', () => { 

        const mockedUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;

         mockedUseFetchGifs.mockReturnValue({
            gifs: testGifs,
            isLoading: false
        });

        render( <GifGrid category={category}/> );
        expect(screen.getByText(category)).toBeTruthy();
        expect(screen.getAllByRole('img')).toHaveLength(testGifs.length)
        screen.debug();
     });

 });