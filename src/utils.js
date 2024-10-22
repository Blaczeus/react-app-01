import React, { useState, useEffect } from 'react';

const ThemeToggleButton = () =>
{
    const [ isDarkMode, setIsDarkMode ] = useState( false );

    useEffect( () =>
    {
        const savedTheme = localStorage.getItem( 'theme' );
        if ( savedTheme )
        {
            setIsDarkMode( savedTheme === 'dark' );
            document.body.classList.toggle( 'dark', savedTheme === 'dark' );
        }
    }, [] );

    const handleToggle = () =>
    {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode( !isDarkMode );
        document.body.classList.toggle( 'dark', newTheme === 'dark' );
        localStorage.setItem( 'theme', newTheme );
    };

    return (
        <button
            onClick={handleToggle}
            className="fixed p-2 text-black transition bg-gray-300 rounded-full shadow-md top-4 right-4 dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggleButton;
