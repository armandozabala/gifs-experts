import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    

    const { data, loading } = useFetchGifs(category);


    return (
        <>
        <h3> {category} </h3>

        { loading && <p className="animate__animated animate__flash">Loading </p>}

     
        <div className="card-grid">
          
                {
                    data.map(img => (
                         <GifGridItem 
                               key={img.id} 
                               {...img}
                         />
                    ))
                }
         
            </div>
       </>
    )
}

export default GifGrid
