import React from 'react'

const ToggleTheme = ({darkMode, setDarkMode}) => {
  return (
    <button
        onClick={() => setDarkMode(!darkMode)}
        className='px-2 py-1 rounded border hover:bg-gray-200 dark:hover:bg-gray-600 transition'
    >
        {darkMode ? 'Light' : 'Dark'}    
    </button>
  )
}

export default ToggleTheme
