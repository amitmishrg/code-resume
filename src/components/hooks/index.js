import React, { useState, useEffect } from 'react';
import { defaultTheme } from '../../../data';

const useLocalStorage = (key, defaultValue = defaultTheme) => {
    const [state, setState] = useState(() => {
        return localStorage.getItem(key) || defaultValue;
    });

    useEffect(() => {                        
        localStorage.setItem(key, state);
    }, [state]);

    return [state, setState];
}

export default useLocalStorage;