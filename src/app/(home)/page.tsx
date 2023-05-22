import { Suspense } from 'react'
import ServerSideRenderingPage from '../(group-two)/rendering-pattern/server-side-rendering/page'
import { Header } from '@/components/Header/header'
import { Footer } from '@/components/Footer/footer'

export default function Home() {
    return (
        <div>
            <Header />
            <div>Conntent</div>
            <Footer />
        </div>
    )
}
