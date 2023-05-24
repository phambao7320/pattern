'use client'
import { Suspense } from 'react'
import { useState } from 'react'
import { getListAllObjects, createNewObjects } from '@/apis/test.api'

export const Home = () => {
    const [listTodo, setListTodo] = useState([])

    const handleGetAllList = async () => {
        const res = await getListAllObjects()
        const data = await res.data
        setListTodo(data)
    }

    const handleAddTodo = async () => {
        const fakeData = {
            title: 'tester',
            body: 'testerSuper',
            userId: 1
        }
        const res = await createNewObjects(fakeData)
        handleGetAllList()
        // setListTodo(data)
    }

    console.log(listTodo)

    return (
        <div>
            <div>Conntent</div>
            {listTodo.map((item: any) => (
                <li key={item.id}>{`${item.id}. ${item.title}`}</li>
            ))}
            <div className='flex gap-5 items-center'>
                <button onClick={handleAddTodo}>Add Todo</button>
                <button onClick={handleGetAllList}>List Todo</button>
            </div>
        </div>
    )
}

Home.displayName = 'Home'
