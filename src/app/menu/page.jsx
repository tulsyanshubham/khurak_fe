"use client";
import Header from '@/components/Header'
import Menu from '@/components/menu/Menu';
import { theme } from '@/hooks/Atoms';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react'

export default function Page() {

    const [siteTheme] = useAtom(theme)
    useEffect(() => {
        if (siteTheme === 'dark')
            document.body.classList.add("dark");
        else
            document.body.classList.remove('dark');
        return () => {
            document.body.classList.remove(siteTheme);
        }
    }, [siteTheme]);

  return (
    <div>
      <Header />
      <Menu />
    </div>
  )
}
