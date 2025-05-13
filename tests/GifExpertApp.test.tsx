import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';


describe(`Tests on "GifExpertApp.tsx" component`, () => { 

    const inputValue = 'Hello!!!';
    
    test('A newly-added category should be rendered at the top of the list', async () => { 
        
        render(<GifExpertApp/>)
        const input:HTMLInputElement = screen.getByRole('textbox');
        
        if (!(input instanceof HTMLInputElement)) {
            throw new Error('Expected an HTMLInputElement');
        }

        const form:HTMLFormElement = screen.getByRole('form');
        if (!(form instanceof HTMLFormElement)) {
            throw new Error('Expected an HTMLFormElement');
        }

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(screen.getByText(inputValue)).toBeTruthy();
        expect(screen.getAllByRole('heading',{level:2})[0].innerHTML).toContain(inputValue);
       
     });
    
    test(`A Duplicated category must not be added`, async () => { 
        
        render(<GifExpertApp/>)
        const input:HTMLInputElement = screen.getByRole('textbox');
        
        if (!(input instanceof HTMLInputElement)) {
            throw new Error('Expected an HTMLInputElement');
        }

        const form:HTMLFormElement = screen.getByRole('form');
        if (!(form instanceof HTMLFormElement)) {
            throw new Error('Expected an HTMLFormElement');
        }

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(screen.getAllByText(inputValue)).toHaveLength(1);
       
     });

 });