import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, menu }) => {

  return (
    <div className=''>
        <Head>
            <title>Chris Photography</title>
        </Head>
        <div className='flex h-screen'>
            <div className='flex'>
                <nav className='flex w-1/3'>
                    <Header menu={menu} />
                </nav>
                <main className='w-full p-24 overflow-x-hidden overflow-y-auto'>
                    {children}
                </main>
            </div>
        </div>
    </div>
  )
}

export default Layout