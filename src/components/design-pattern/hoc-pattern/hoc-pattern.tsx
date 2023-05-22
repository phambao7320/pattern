'use client'

import React from 'react'
import Button from './components/button/button'

const button1 = (
    <Button
        action={() => {
            console.log('Click button primary')
        }}
        type='primary'
    />
)
const button2 = (
    <Button
        action={() => {
            console.log('Click button second')
        }}
        type='second'
    />
)

export const HocPattern = () => {
    return (
        <>
            <div>HocPattern</div>
            <div className='flex gap-2 items-center'>
                {button1}
                {button2}
            </div>
        </>
    )
}

HocPattern.displayName = 'HocPattern'
