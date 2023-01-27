import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';

export const Odometro = ({ inicia, termina}) => {

    const [value, setValue] = useState(inicia);

    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(termina), 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [termina]);

    return (<>
        <Odometer value={value} format="(.ddd),dd" />
    </>)
    
    
}
