import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-row h-full'>
        <Head>
            <title>Chris Photography</title>
        </Head>
        <div >
            <div className='relative h-screen flex w-72 overflow-y-auto'>
                <Header />
            </div>
        </div>
        <div className='max-w-full h-full flex relative overflow-y-auto'>
            <main>
                {children}
            </main>

        <footer>
            <Footer />
        </footer>
        </div>
    </div>
  )
}

export default Layout