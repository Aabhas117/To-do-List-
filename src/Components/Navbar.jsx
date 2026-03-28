import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-800 text-white py-2'>
     <div className="logo">
      <span className='font-bold text-xl mx-8'>i task</span>
     </div>
      <ul className='flex gap-7 mx-9'>
        <li className='curson-pointer hover:font-bold transition-all '>Home</li>
        <li className='curson-pointer hover:font-bold transition-all '>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
