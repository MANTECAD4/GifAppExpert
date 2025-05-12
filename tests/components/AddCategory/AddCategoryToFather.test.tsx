import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategoryToFather } from '../../../src/components/AddCategory/AddCategoryToFather';


describe(`Tests on "AddCategoryToFather" component`, () => { 

    const inputValue    = 'Hello World!!!';

    test(`Text Input content should be able to change`, () => { 

        render( <AddCategoryToFather onNewCategory={()=>{}}/> );
        const input:HTMLInputElement = screen.getByRole('textbox');

        if (!(input instanceof HTMLInputElement)) {
            throw new Error('Expected an HTMLInputElement');
        }

        fireEvent.input(input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue);
        // screen.debug();
     });

     test(`onNewCategory Callback must be excecuted after submiting a valid input value`, () => { 
        
        const onNewCategory = jest.fn();

        render( <AddCategoryToFather onNewCategory={ onNewCategory }/> );

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

        expect(input.value).toBe(''); 
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        // screen.debug()
        
    });
    
    test(`onNewCategory Callback must not be excecuted after submiting an invalid input value`, () => { 
        const onNewCategory = jest.fn();

        render( <AddCategoryToFather onNewCategory={ onNewCategory }/> );
        
        
        const form:HTMLFormElement = screen.getByRole('form');
        if (!(form instanceof HTMLFormElement)) {
            throw new Error('Expected an HTMLFormElement');
        }
        
        fireEvent.submit(form);
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });

 });