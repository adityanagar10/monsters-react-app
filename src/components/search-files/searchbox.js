import React from 'react';
import "./search.box.style.css"

function searchbox({placeholder , handleChange }){
    return(<div>
    <input className="search" type='search' placeholder={placeholder} onChange={handleChange}
        
    />
    
    </div>)
}

export default searchbox;