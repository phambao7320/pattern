import { getDetailObject, getListAllObjects } from '@/apis/test.api'
import { DetailObject } from '@/components/rendering-pattern/server-side-rendering/[slug]/[slug]'
import { notFound } from 'next/navigation'

const DetailObjectPage = async ({ params }: any) => {
    const data = await getData({ params })
    const check = data.id
    if (!check) return notFound()
    return <DetailObject data={data} />
}

export async function generateStaticParams() {
    const listObjects = await getListAllObjects()
    return listObjects.data.splice(0, 10).map((object: any) => ({ slug: object.id.toString() }))
}

const getData = async ({ params }: any) => {
    const objectId = params.slug
    try {
        const res = await getDetailObject(objectId)
        return await res.data
    } catch (error) {
        return {}
    }
}

export default DetailObjectPage
