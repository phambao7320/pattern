'use client'

import React from 'react'

export const DetailObject = ({ data }: any) => {
    console.log(data)
    const { title, userId, completed } = data
    return (
        <div>
            <h1>Title : {title}</h1>
            <p>Is Complete: {completed}</p>
            <span>Create by : {userId} </span>
        </div>
    )
}

DetailObject.displayName = 'DetailObject'
