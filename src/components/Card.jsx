import React from 'react';

function Card({title,children}){
    return(
        <section id="card">
        <header>
            <h3>{title}</h3>
        </header>
       {children}
    </section>
    )

}

export default Card;