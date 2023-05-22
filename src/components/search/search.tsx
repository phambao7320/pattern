'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const Search = () => {
    const router = useRouter()
    const [searchValue, setSearchValue] = useState<string>('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        router.push(`/search/${searchValue}`)
        setSearchValue('')
    }

    return (
        <form onSubmit={handleSubmit} className='flex justify-between items-center gap-2'>
            <input
                className='border'
                type='text'
                width={'200px'}
                placeholder='Enter input search'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className='p-2' type='submit'>
                Search
            </button>
        </form>
    )
}

Search.displayName = 'Search'
