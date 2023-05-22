'use client'

import React, { createContext, useContext } from 'react'

const ProfileContext = createContext<any>({})

const ProviderPattern = ({ children }: any) => {
    const data = {
        fullName: 'Pham Bao',
        email: 'phambao@gmail.com'
    }

    return <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
}

const useProfilePattern = () => {
    const infoProfile = useContext<any>(ProfileContext)
    if (!infoProfile) {
        throw new Error('useProfilePattern must be used within ProviderPattern')
    }
    return infoProfile
}

export { ProviderPattern, useProfilePattern }

ProviderPattern.displayName = 'ProviderPattern'
