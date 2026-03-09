'use client'

import { useRouter } from 'next/navigation'
import FlagKR from './ui/svgIcon/FlagKR'
import FlagJP from './ui/svgIcon/FlagJP'

export function LocaleButton() {
    const router = useRouter()

    const changeLocale = async (locale: 'ko' | 'en' | 'ja') => {
        const response = await fetch('/api/locale', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ locale })
        })
        if (response.ok)
            router.refresh()
    }

    return (
        <span className="flex gap-x-4 p-8 fixed top-0 right-0 z-10">
            <button className="cursor-pointer" onClick={() => changeLocale('ko')}><FlagKR /> 한국어</button>
            <button className="cursor-pointer" onClick={() => changeLocale('ja')}><FlagJP /> 日本語</button>
        </span>
    )
}