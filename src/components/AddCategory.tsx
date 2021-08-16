import React, { useState } from "react"; 
import PropTypes from "prop-types";

const AddCategory = ( { setCategories }: any )=>{

    const [inputValue, setinputValue]=useState('');

    const handleInputChange = (e:any) => {
        setinputValue(e.target.value)
    }

    const handleSudmit = ( e:any ) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( (cats:any) => [ inputValue,...cats ]);
            setinputValue('');
        }
    }

    return ( 
        <form onSubmit={handleSudmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
export {
    AddCategory
}
AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
} 