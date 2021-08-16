
import React, { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


const GifGrid = ({ category }: any ) => {

    const { data:images ,loading} = useFetchGifs( category );

    return (
        <>
        <h3 className='animate__animated animate__headShake' >{category}</h3>
        { loading && <p className='animate__animated animate__headShake'>Loading</p> }
        <div className='card-grid'>  
            {
                images.map(  (img: any)  => (
                    <GifGridItem 
                        key={ img.id } 
                        {...img }
                    />
                ))
            }
        </div>
        </>
    )
}

export {
    GifGrid
}