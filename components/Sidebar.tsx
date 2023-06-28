"use client"
// we are importing sidebar into layout of the page, proper way to mix client component to server component

import { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';

// import icon
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';

// create a rule for the datatype of the props
interface SidebarProps {
  children: React.ReactNode;
}

// this renders children
const Sidebar: FC<SidebarProps> = ({
  children
}) => {
  
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      // the home navigation is gona be active everytime we are not in /search
      href: '/',
    },
    {
      icon: BiSearch,
      label: 'Search',
      active: pathname === '/search',
      href: '/search',
    }
  ], [pathname])

  return (
  <div className='flex h-full'>
    <div 
      className='
        hidden
        md:flex
        flex-col
        gap-y-2
        bg-black
        h-full
        w-[300px]
        p-2
      '>
        <Box>
          <div
            className='
              flex 
              flex-col
              gap-y-4
              px-5
              py-4
            '
          >
            {
              routes.map(item => (
                <SidebarItem 
                  key={item.label}
                  {...item}
                />
              ))
            }
          </div>
        </Box>
        <Box className='overflow-y-auto h-full'>
          <Library />
        </Box>
      </div>

      <main className='h-full flex-1 auto-y-auto py-2'>
        {children}
      </main>
    </div>
  )
}

export default Sidebar