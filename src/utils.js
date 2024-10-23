import React, { useState, useEffect } from 'react';
import { Classic } from '@theme-toggles/react';

const ThemeToggleButton = () =>
{
    const [ isToggled, setIsToggled ] = useState( false );

    useEffect( () =>
    {
        const savedTheme = localStorage.getItem( 'theme' );
        const isDark = savedTheme === 'dark' ;
        setIsToggled( isDark );
        document.body.classList.toggle('dark', isDark)
    }, []);
    
    const handleToggle = () =>
    {
        const newTheme = !isToggled ? 'dark' : 'light';
        setIsToggled( !isToggled );
        document.body.classList.toggle( 'dark', newTheme === 'dark' );
        localStorage.setItem( 'theme', newTheme);
    };

    return (
        <Classic
            toggled={isToggled}
            toggle={handleToggle}
            duration={500}
            className={`fixed text-4xl font-bold top-4 right-4 
                ${ isToggled ? 'text-yellow-500 hover:text-yellow-300' : 'text-gray-800 hover:text-gray-600'}`}
            title="Toggle theme"
        />
    );
};

export default ThemeToggleButton;
