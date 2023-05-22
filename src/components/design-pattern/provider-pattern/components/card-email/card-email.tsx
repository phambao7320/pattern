'use client'

import React from 'react'
import { useProfilePattern } from '../../provider'

export const CardEmail = () => {
    const { email } = useProfilePattern()

    return <div>Email : {email}</div>
}

CardEmail.displayName = 'CardEmail'
