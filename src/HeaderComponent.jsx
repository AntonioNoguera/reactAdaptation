import React from 'react';

function HeaderComp({datos}){

    const celdas = datos.map((item,index)=>(
        <th className={`mx-auto text-center dia${index}`} key={index}>{item}</th> 
    ));

    return(
        <>
        {celdas}
        </>
    );
}

export default HeaderComp;