import React from 'react'
import ToggleTheme from './ToggleTheme'

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <nav className='flex jsutify-between items-center p-4 shadow-md bg-white dark:bg-gray-800'>
        <h1 className='text-xl font-bold'>Crypto Dashboard</h1>
        <div className='flex items-center space-x-4'>
            <input 
                type="text"
                placeholder='Search coin...'
                className='px-2 py-1 rounded border focus:outline-none' 
            />
            <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
    </nav>
  )
}

export default Navbar
