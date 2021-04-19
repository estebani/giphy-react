import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategory}) => {

    const [inputText, setinputText] = useState('')

    const handleInputChange = (e) => {
        setinputText(e.target.value)
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputText.trim().length > 2){
            setCategory((cats)=>[inputText, ...cats])
            setinputText('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ inputText }
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategory: PropTypes.func.isRequired
}
