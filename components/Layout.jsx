import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>Chris Photography</title>
        </Head>
        <header>
            Header
        </header>
        <main>
            {children}
        </main>
        <footer>
            Footer
        </footer>
    </>
  )
}

export default Layout