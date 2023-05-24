import { getListAllObjects } from '@/apis/test.api'
import React from 'react'

const SearchResult = async ({ params }: any) => {
    const result: any = await getData({ params })
    return (
        <div>
            <div>SearchResult</div>
            <ol className='list-decimal'>
                {result.map((item: any) => (
                    <li key={item.it}>{item.title}</li>
                ))}
            </ol>
        </div>
    )
}

const getData = async ({ params }: any) => {
    const searchText = params.result
    const listTodo = await getListAllObjects()
    // throw new Error('Co loi roi dai ka oi!')
    const result = listTodo.data.filter((item: any) => item.title.includes(searchText))
    return result
}

export default SearchResult
