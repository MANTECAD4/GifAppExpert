import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';


describe(`Tests on "GifItem.tsx" component`, () => { 
    
    const gifTest = {
        title: "Cat Kittens GIF",
        url: "https://media4.giphy.com/media/v1.Y2lkPTFlMWVjMTVlN2poenVlNmpkdDFkYnA0bTE3MTRmY2k2aXhsMmtzbzl6cmtlZzlvMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wAmQh1YWjhGms/200.gif",
        id: "wAmQh1YWjhGms"
    }


    test('The component must match a snapshot', () => { 
        const { container } = render(
            <GifItem 
                key={ gifTest.id }
                { ...gifTest }    
            />
        )  
        expect( container ).toMatchSnapshot();
     });

     test('The image must have the right src and alt  fields', () => { 
        render(
            <GifItem 
                key={ gifTest.id }
                { ...gifTest }    
            />
        );

        const img = screen.getByRole('img');
        if (!(img instanceof HTMLImageElement)) {
            throw new Error('Expected an HTMLImageElement');
        }
        const {src, alt } = img;
        expect(src).toBe(gifTest.url);
        expect(alt).toBe(gifTest.title);

    });

    test('The component must cointain the right title', () => { 

        render(
            <GifItem 
                key={ gifTest.id }
                { ...gifTest }    
            />
        );
        expect(screen.getByText(gifTest.title)).toBeTruthy();
    });

 });