import React from 'react'
import { People, Developer } from './prototype-pattern.class'

export const PrototypePattern = () => {
    const people = <People name='PeopleName' age={11} />
    const developer = <Developer name='PhamBao' age={23} job='DEV' />

    return (
        <>
            <div>PrototypePattern</div>
            {people}
            {developer}
        </>
    )
}

PrototypePattern.displayName = 'PrototypePattern'
