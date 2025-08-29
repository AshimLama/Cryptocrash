import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CryptoCards from './components/CryptoCards';
import CryptoChart from './components/CryptoChart';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className='flex flex-col lg:flex-row'>
        <Sidebar className='w-full lg:w-1/4 p-4'/>
        <main className='w-full lg:w-3/4 p-4'>
          <CryptoCards/>
          <CryptoChart/>
        </main>
      </div>
    </div>
  )
}

export default App

