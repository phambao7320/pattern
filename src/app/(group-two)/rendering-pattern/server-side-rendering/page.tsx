import { getListAllObjects } from '@/apis/test.api'
import { ExampleServerSideRendering } from '@/components/rendering-pattern/server-side-rendering/server-side-rendering'
import { setTimeout } from 'timers/promises'

const ServerSideRenderingPage = async () => {
    const data = await getData()
    return <ExampleServerSideRendering data={data} />
}

const getData = async () => {
    const random = Math.round(Math.random() * 5000)
    await setTimeout(random)
    const res = await getListAllObjects()
    const data = await res.data
    return data.splice(0, 10)
}

export default ServerSideRenderingPage
