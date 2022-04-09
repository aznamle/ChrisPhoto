import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='flex'>
        <Head>
            <title>Chris Photography</title>
        </Head>
        <div className='w-1/5'>
            <header>
                <Header />
            </header>
        </div>
        <div className='w-4/5'>
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