'use client'
import React from 'react'
import { ProviderPattern, useProfilePattern } from './provider'
import { CardName } from './components/card-name/card-name'
import { CardEmail } from './components/card-email/card-email'

export const ProfilePattern = () => {
    return (
        <ProviderPattern>
            <CardName />
            <CardEmail />
        </ProviderPattern>
    )
}

ProfilePattern.displayName = 'ProfilePattern'
