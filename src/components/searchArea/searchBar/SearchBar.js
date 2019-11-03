import React from "react";

export default function SearchBar(props) {
    return (
        <div>
            <input type='text'
                   placeholder='Введите страну или издание'/>
            <button>+</button>
        </div>
    )
}