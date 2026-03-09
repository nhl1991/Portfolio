import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { locale } = await req.json()
    if (locale !== 'ja' && locale !== 'ko') return NextResponse.json(
        { error: 'Unsupported locale' },
        { status: 400 }
    )
    const cookieStore = await cookies()
    cookieStore.set('locale', locale, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
    })
    return NextResponse.json({ message: 'OK' }, { status: 200 })
}