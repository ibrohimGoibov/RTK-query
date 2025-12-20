import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <ul className='flex items-center justify-center gap-[10px] text-[20px] font-[600] p-[20px]'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/todo'}>Todo</Link>
            </li>
        </ul>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout