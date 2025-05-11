import { useState } from "react"
import { AddCategoryToFather,
         GifGrid } from "./components/index.ts";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kittens']);



    const onAddCategory = ( newValue:string ) =>  {
      
      if (categories.includes(newValue)) return;
      setCategories([newValue,...categories]);

    };

    return (
      <>
        <h1>GifExpertApp de Ñañel</h1>
        {/* <AddCategoryToChild setCategories = {setCategories} /> */}
        <AddCategoryToFather onNewCategory = { onAddCategory }/>

            {
              categories.map( category => 
                <GifGrid 
                  key = {category} 
                  category = { category }/>
              )
            }

      </>
  )
}

