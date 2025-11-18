// export default Layout
import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Header from '../components/header/Header'
import { Outlet, useLocation } from 'react-router'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const headerHeight = 90;

  //  safer check
  const hideHeader = location.pathname.startsWith('/settings/change-password');
 

  return (
    <div className='flex'>
      {/* sidebar section */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* right section */}
      <div className='flex flex-col flex-1'>
        {/* fixed header */}
        {!hideHeader && (
          <div className='fixed h-[90px] top-0 left-0 right-0 z-50 md:pl-64'>
            <Header setSidebarOpen={setIsSidebarOpen} />
          </div>
        )}

        <main
          className={`flex-1 overflow-auto ${
            hideHeader ? '' : 'pt-[90px]'
          } pl-0`}
        >
          <div className='md:pl-64'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;


