import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One punch'])


    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            

           <ol>
               {
                   categories.map( category => (
                         <GifGrid 
                            category={category}
                            key={category}    
                        />
                   ))
               }
           </ol>
        </div>
    )
}

export default GifExpertApp
