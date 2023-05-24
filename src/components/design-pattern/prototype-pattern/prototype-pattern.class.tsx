'use client'

import { Component } from 'react'

interface PeopleProps {
    name: string
    age: number
    job?: string
}

class People extends Component<PeopleProps> {
    getJob = () => {
        return <div>{`I'm a ${this.props.job}`}</div>
    }

    render() {
        return (
            <>
                <h1>{`Hello, I'm ${this.props.name}!`}</h1>
                <p>{`I'm ${this.props.age} olds `}</p>
            </>
        )
    }
}

class Developer extends People {
    constructor(props: PeopleProps) {
        super(props)
    }

    render() {
        return (
            <>
                {super.render()}
                {this.getJob()}
            </>
        )
    }
}

export { People, Developer }
