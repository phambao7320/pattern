'use client'

import React, { useState } from 'react'

const initialState = {
    firstName: 'Pham',
    lastName: 'Bao',
    email: 'phambao@gmail.com',
    password: '123456'
}

const User = new Proxy(initialState, {
    get: function (target, prop) {
        // return Reflect.get(target, prop)
    },
    set: function (target, prop, value) {
        // return Reflect.set(target, prop, value)
        return true
    }
})

export const ProxyPattern = () => {
    const [user, setUser] = useState(User)

    const handleInputChange = (e: any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        User[e.target.name as keyof typeof User] = e.target.value
    }

    const handleRegister = (e: any) => {
        e.preventDefault()
        console.log(initialState)
        console.log(user)
    }

    return (
        <form onSubmit={handleRegister} className='flex justify-center items-center w-[30%] mx-auto'>
            <div className='flex flex-col w-full'>
                <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={user.firstName}
                    onChange={handleInputChange}
                />
                <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    value={user.lastName}
                    onChange={handleInputChange}
                />
                <input type='email' name='email' placeholder='Email' value={user.email} onChange={handleInputChange} />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={user.password}
                    onChange={handleInputChange}
                />
                <button type='submit'>Register</button>
            </div>
        </form>
    )
}

ProxyPattern.displayName = 'ProxyPattern'
