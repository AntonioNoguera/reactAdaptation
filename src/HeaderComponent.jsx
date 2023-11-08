import React from 'react';

function HeaderComp({datos}){

    const celdas = datos.map((item,index)=>(
        <th className='p-2 text-center' key={index}>{item}</th>
    ));

    return(
        <>
        {celdas}
        </>
    );
}

export default HeaderComp;