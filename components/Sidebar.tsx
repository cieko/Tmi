"use client"
// we are importing sidebar into layout of the page, proper way to mix client component to server component

import { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { Song } from '@/types';
import usePlayer from '@/hooks/usePlayer';

// import icon
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';
import { twMerge } from 'tailwind-merge';

// create a rule for the datatype of the props
interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

// this renders children
const Sidebar: FC<SidebarProps> = ({
  children,
  songs
}) => {
  
  const pathname = usePathname();

  const player = usePlayer();

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
  <div className={twMerge(`
    flex
    h-full
  `, 
    player.activeId && "h-[calc(100%-80px)]"
  )}>
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
          <Library songs={songs} />
        </Box>
      </div>

      <main className='h-full flex-1 auto-y-auto py-2'>
        {children}
      </main>
    </div>
  )
}

export default Sidebar