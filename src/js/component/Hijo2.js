import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Hijo2 = () => {
    const { state, useState } = useContext(Context);
    return (
        <div>Hijo2
            <h3>{state}</h3>
        </div>
    )
}

export default Hijo2