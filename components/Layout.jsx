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
            <div className='md:flex h-full'>
                <nav className='w-1/4 flex mx-auto p-12'>
                    <Header menu={menu} />
                </nav>
                <main className='flex flex-col w-full p-12 overflow-x-hidden overflow-y-auto'>
                    {children}
                </main>
            </div>
        </div>
    </div>
  )
}

export default Layout