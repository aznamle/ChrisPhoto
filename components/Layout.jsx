import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, menu }) => {

  return (
    <div className=''>
        <Head>
            <title>Chris Photography</title>
            <meta name="description" content="Cjfotography" />
            <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📷</text></svg>"
            />
        </Head>
        <div className='bg-gray-100'>
            <div className='h-full'>
                <nav className='p-8'>
                    <Header menu={menu} />
                </nav>
                <main className='items-center w-full h-full mt-12 md:mt-6'>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Layout