import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue = 'dark') => {
    const [state, setState] = useState(() => {
        return localStorage.getItem(key) || defaultValue;
    });

    useEffect(() => {                        
        localStorage.setItem(key, state);
    }, [state]);

    return [state, setState];
}

export default useLocalStorage;