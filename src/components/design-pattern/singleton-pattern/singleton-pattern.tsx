'use client'

import React, { useEffect, useState } from 'react'
import { getDetailObject, getListAllObjects } from '@/apis/test.api'

export const SingletonPattern = () => {
    const [data, setData] = useState<any>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const result = await getListAllObjects()
            setLoading(false)
            if (result.status === 200) {
                setData(result.data)
            } else {
                console.log('error')
            }
        }
        getData()
    }, [])

    return (
        <div>
            <h1>List Objects</h1>
            {isLoading && <div>Loading..........</div>}
            <ul>{!!data.length && data.map((item: any) => <li key={item.id}>{item.name}</li>)}</ul>
        </div>
    )
}

SingletonPattern.displayName = 'SingletonPattern'
