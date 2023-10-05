import React, { useState } from 'react';

export const useCounter = ( value = 0 ) => {
    const [counter, setCounter] = useState( value );

    function increment() {
        setCounter(counter + 1);
    }

    return {
        counter,
        increment,
    }
}