import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <nav className='flex justify-between items-baseline px-10 py-3 bg-gray-400 drop-shadow-sm'>
        <h1 className='font-orbitron text-3xl  text-red-500 border'>INDE GAMER</h1>
        <div>
            <ul className='flex gap-4'>
                <Link href={'/'}>
                <li className='cursor-pointer hover:border-b-2 hover:border-indigo-300'>Home</li>
                </Link>
                <Link href={'/review'}>
                <li className='cursor-pointer hover:border-b-2 hover:border-indigo-300'>Review</li>
                </Link>
                <a href={'/about'}>
                <li className='cursor-pointer hover:border-b-2 hover:border-indigo-300'>About</li>
                </a>
            </ul>
        </div>
        <div>
            <button className='bg-white rounded-sm px-5 py-2 text-black'>Login</button>
        </div>
    </nav>
  )
}

export default Header