'use client'

import React from 'react'
import { useProfilePattern } from '../../provider'

export const CardName = () => {
    const { fullName } = useProfilePattern()

    return <div>FullName : {fullName}</div>
}

CardName.displayName = 'CardName'
