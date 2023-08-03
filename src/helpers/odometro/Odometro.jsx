import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import "./Odometro.css"

export const Odometro = ({ inicia, termina}) => {

    const [value, setValue] = useState(inicia);

    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(termina), 400);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [termina]);

    return (<>

        <Odometer
            className='odometro' 
            value={ value } 
            format="(.ddd),dd" 
        />

    </>)
    
    
}
