import React from 'react';

function HeaderComp({datos}){

    const celdas = datos.map((item,index)=>(
        <th key={index}>{item}</th>
    ));

    return(
        <>
        {celdas}
        </>
    );
}

export default HeaderComp;