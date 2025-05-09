import { useState } from "react"
import { AddCategoryToChild } from "./components/AddCategory/AddCategoryToChild";
import { AddCategoryToFather } from "./components/AddCategory/AddCategoryToFather";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kittens']);



    const onAddCategory = ( newValue:string ) =>  {
      
      if (categories.includes(newValue)) return;
      setCategories([newValue,...categories]);

    };

    return (
      <>
        <h1>GifExpertApp</h1>
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

