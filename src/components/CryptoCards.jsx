import React from 'react'

const CryptoCards = () => {

    const coins = [ 
        { name: 'Bitcoin', symbol: 'BTC', price: '$30,000', change: '+2%' },
        { name: 'Ethereum', symbol: 'ETH', price: '$2,000', change: '+3%' },
        { name: 'Cardano', symbol: 'ADA', price: '$1.20', change: '-1%' },
        { name: 'Solana', symbol: 'SOL', price: '$35', change: '+5%' },
        { name: 'Polkadot', symbol: 'DOT', price: '$25', change: '+0.5%' }  
    ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
        {coins.map((coin) =>(
            <div key={coin.symbol} className='p-4 bg-white dark:bg-gray-700 rounded shadow hover:scale-105 transition-transform'>
                <h3 className='font-bold'>{coin.name}({coin.symbol})</h3>
                <p className='text-lg'>{coin.price}</p>
                <p className={coin.change.startsWith("+") ? "text-green-500" : "text-red-500"}>{coin.change}</p>
            </div>
        ))}
    </div>
  )
}

export default CryptoCards
