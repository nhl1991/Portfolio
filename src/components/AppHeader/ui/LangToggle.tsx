'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Locale } from '@/lib/interface'
import { cn } from '@/lib/utils'

const LOCALES: { locale: Locale; label: string }[] = [
    { locale: 'ko', label: 'KO' },
    { locale: 'ja', label: 'JA' },
    { locale: 'en', label: 'EN' },
]

export default function LangToggle() {
    const router = useRouter()
    const current = useLocale() as Locale

    const changeLocale = async (locale: Locale) => {
        const response = await fetch('/api/locale', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ locale })
        })
        if (response.ok)
            router.refresh()
    }

    return (
        <div className="flex border border-border rounded-full overflow-hidden font-mono text-[11px] bg-card">
            {LOCALES.map(({ locale, label }) => (
                <button
                    key={locale}
                    type="button"
                    onClick={() => changeLocale(locale)}
                    aria-pressed={current === locale}
                    className={cn(
                        'px-3 py-1.5 cursor-pointer transition-colors',
                        current === locale
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                    )}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}
