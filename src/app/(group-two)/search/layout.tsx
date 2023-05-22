import React from 'react'
import { Search } from '@/components/search/search'
import { Header } from '@/components/Header/header'
import { Footer } from '@/components/Footer/footer'

const layout = ({ children }: any) => {
    return (
        <div>
            <title>Page Search</title>
            {/* <Header /> */}
            <main className='flex'>
                <div>
                    <h1>{`Search | `}</h1>
                </div>
                <div className='flex-col ml-5'>
                    <Search />
                    <div>{children}</div>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default layout
