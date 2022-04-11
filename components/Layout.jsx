import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='flex h-screen'>
        <Head>
            <title>Chris Photography</title>
        </Head>
        <div className='flex-1 flex flex-col overflow-hidden'>
            <div className='flex h-full'>
                <nav className='flex w-1/4 h-full'>
                    <div className='w-full flex mx-auto py-4'>
                        <div className='w-full h-full flex items-center justify-center text-gray-900 text-xl '>
                            <Header />
                        </div>
                    </div>
                </nav>
                <main className='  w-full overflow-x-hidden overflow-y-auto'>
                    <div className='flex  mx-auto p-2'>
                        {children}
                    </div>
                    <footer className='flex mx-auto items-center justify-center h-24'>
                        <Footer />
                    </footer>
                </main>
            </div>
        </div>
    </div>
  )
}

export default Layout