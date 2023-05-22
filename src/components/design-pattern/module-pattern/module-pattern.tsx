'use client'

import { useState } from 'react'
import Image from 'next/image'

export const ModulePattern = () => {
    const [srcImg, setSrcImg] = useState('')

    const handleImportImg = async () => {
        if (!srcImg) {
            console.log(true)
            const {
                default: { src }
            } = await import('~/masterplan_raster.png')
            return setSrcImg(src)
        }
        console.log(false)
        return setSrcImg('')
    }

    return (
        <>
            {srcImg && <Image src={srcImg} width={300} height={300} alt='TestImportDynamic' />}

            <button onClick={handleImportImg}>Click Show Img</button>
        </>
    )
}

ModulePattern.displayName = 'ModulePattern'
