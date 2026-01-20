import React, { useState } from 'react'
import Logo from './Logo'

const Navbar = () => {
  const [isSideBar, setisSideBar] = useState(true);
  function sideBar() {
    if (isSideBar === true) {
      setisSideBar(false);

    }
    else {
      setisSideBar(true);


    }
  }
  return (
    <header className='min-h-14 w-full flex flex-col  justify-center relative'>

      <nav className='flex justify-between w-[90%] m-auto'>
        <aside
          className={`
      absolute top-0 left-0 z-40
     bottom-0 h-screen w-[70%] bg-black pl-5
      transition-transform duration-400
       ease-[cubic-bezier(0.65,0,0.35,1)]
    ${isSideBar ? "-translate-x-full" : "translate-x-0"}
  `}
        >
          <div className='flex justify-between items-center'>
            <Logo />
            <button onClick={() => {
              sideBar();
            }}><i className="fa-solid fa-x"></i></button>
          </div>
          <ul className='leading-10 mt-3'>
            <li><a href="#">Home</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#Contact">Contact Us</a></li>
            <li><a href="#Service">Services</a></li>
            <form action="" className='mt-5 flex flex-wrap gap-3 items-center'>
              <input type="text" placeholder='Search...' className='w-[80%] p-1 rounded-md border-2' />
              <button className='p-1 bg-white text-black text-[23px] font-medium rounded-md '>Search</button>
            </form>
          </ul>
        </aside>
        <div>
          <Logo />

        </div>
        <div className='flex gap-8'>
          <div className='md:hidden'><button onClick={() => {
            sideBar();
          }}><i className="fa-solid fa-bars"></i></button></div>

          <ul className='hidden md:flex list-none  gap-5 2xl:text-2xl items-center justify-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#Contact">Contact Us</a></li>
            <li><a href="#Service">Services</a></li>
          </ul>
          <div className='hidden md:block'>
            <span className='lg:text-2xl'><i className="fa-solid fa-magnifying-glass"></i></span>
          </div>
        </div>


      </nav>
    </header>

  )
}

export default Navbar
