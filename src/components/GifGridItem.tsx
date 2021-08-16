import React from "react"; 

const GifGridItem = ({ title, url }:any) => {
    
    return (
        <div className='card animate__animated animate__headShake'>
           <img src={ url } alt={ title }/>
           <p>{ title }</p>
        </div>
    )
}

export{
    GifGridItem
}