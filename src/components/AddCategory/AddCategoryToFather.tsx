import { useState } from "react"

type Props = {
    setCategories?: React.Dispatch<React.SetStateAction<string[]>>,
    onNewCategory:Function // 
}


export const AddCategoryToFather = ( { onNewCategory }:Props) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue(event.target.value)
    }

    const onSubmit = ( event: React.FormEvent<HTMLFormElement>  ) => {
        event.preventDefault();
        const cleanedInput = inputValue.trim()
        if (cleanedInput.length <= 1) return;
        onNewCategory(cleanedInput);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={ onSubmit  }>
                <input
                    type="text"
                    placeholder="Search gifs"
                    value={inputValue}
                    onChange={ onInputChange }
                />
            </form>
        </>
    )
}
