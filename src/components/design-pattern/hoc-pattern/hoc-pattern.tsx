'use client'

import React, { useState } from 'react'
import Button from './components/button/button'
import { createNewObjects, getListAllObjects } from '@/apis/test.api'
import { stringBase64 } from '@/constant/base64'
import PayJP from 'payjp'

export const HocPattern = () => {
    const [listTodo, setListTodo] = useState<any>([])

    const handleGetAllList = async () => {
        const res = await getListAllObjects()
        const data = await res.data.slice(0, 10)
        setListTodo(data)
    }

    const handleAddTodo = async () => {
        const fakeData = {
            title: 'tester',
            body: 'testerSuper',
            userId: 1
        }
        const res: any = await createNewObjects(fakeData)
        console.log(res)
        if (res.status === 201) {
            setListTodo((prev: any[]) => {
                const newList = [...prev, res.data]
                return newList
            })
        }
    }
    const button1 = <Button action={handleAddTodo} type='primary' />
    const button2 = <Button action={handleGetAllList} type='second' />

    const convertToWordFile = () => {
        const byteCharacters = Buffer.from(stringBase64, 'base64').toString('binary')
        const byteNumbers = new Array(byteCharacters.length)

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i)
        }

        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: 'application/msword' })

        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'demo.docxxx'
        link.click()
        console.log(url)
        URL.revokeObjectURL(url)
    }

    const payJP = PayJP('sk_test_24b943905dd3707fe1c29433')
    const onSubmitForm = async () => {
        // await sessionStorage.setItem(keySessionStorage, JSON.stringify(data));
        // handleAction();
        const result = await payJP.tokens.create({
            card: {
                number: '4242424242424242',
                cvc: '123',
                exp_month: '12',
                exp_year: '2028',
                name: 'PHAM NGOC BAO'
            }
        })
        console.log(result)
    }

    console.log('Client')
    return (
        <>
            <div>HocPattern</div>
            <div>Oke Test 8</div>
            <div>Add Test 9</div>
            <ol>
                {listTodo.map((item: any) => (
                    <li key={item.id}>{`${item.id}. ${item.title}`}</li>
                ))}
            </ol>
            <div className='flex gap-2 items-center'>
                {button1}
                {button2}
                <button onClick={convertToWordFile}>Down Load</button>
            </div>
            <p>Bla bla</p>
            <button onClick={onSubmitForm}>CLick test call api</button>
            <p>Day la test 6</p>
        </>
    )
}

HocPattern.displayName = 'HocPattern'
