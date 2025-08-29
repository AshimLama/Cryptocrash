import React from 'react'

const Sidebar = () => {
  return (
    <aside className='bg-white dark:bg-gray-800 p-4 shadow-md mb-4 lg:mb-0'>
        <h2 className='font-bold mb-4'>Top Coins</h2>
        <ul className='space-y-2'>
            <li>Bitcoin</li>
            <li>Ethereum</li>
            <li>Cardano</li>
            <li>Solana</li>
            <li>Polkadot</li>
        </ul>
    </aside>
  )
}

export default Sidebar
