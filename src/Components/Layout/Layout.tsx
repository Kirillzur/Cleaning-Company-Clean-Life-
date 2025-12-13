import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
      <div className='md:p-3.5'>
        <Navbar />
        </div>
        <main className='p-1.5 md:p-5 max-w-[1440px] mx-auto'>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout