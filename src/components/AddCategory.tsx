import { useState } from "react"

type Props = {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>,
}


export const AddCategory = ( {setCategories }: Props) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue(event.target.value)
    }

    const onSubmit = ( event: React.FormEvent<HTMLFormElement>  ) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setCategories(categories => [inputValue,...categories ]);
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
