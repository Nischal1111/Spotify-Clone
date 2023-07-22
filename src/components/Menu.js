import React from 'react';
import "../css/menu.css"

function Menu({title, Icon}) {
    return (
        <div className='menu'>
            {Icon && <Icon className="menu-icons"/>}
            {Icon ?<h4>{title}</h4>: <p>{title}</p>}
        </div>
    )
}

export default Menu