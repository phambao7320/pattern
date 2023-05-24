import Link from 'next/link'

export const ExampleServerSideRendering = ({ data }: any) => {
    return (
        <div>
            <h1>List Data Objects</h1>
            <ul>
                {!!data.length &&
                    data.map((item: any) => (
                        <Link href={`/rendering-pattern/server-side-rendering/${item.id}`} key={item.id}>
                            <li>{`${item.id}. ${item.title}`}</li>
                        </Link>
                    ))}
            </ul>
        </div>
    )
}

ExampleServerSideRendering.displayName = 'ExampleServerSideRendering'
