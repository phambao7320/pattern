import React from 'react'

const layout = ({ children }: any) => {
    return (
        <main className='flex-col'>
            <header className='p-5 bg-blue-500 text-white'>Header List Obj</header>
            <div>{children}</div>
            <footer className='p-5 bg-blue-500 text-white'>Footer List Obj</footer>
        </main>
    )
}

export default layout
