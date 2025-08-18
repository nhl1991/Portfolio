'use client'

import Navigation from "@/components/CirclingNavigation/circleNavigation"
import Description from "@/components/CirclingNavigation/Description"
import Mobile from "@/components/Mobile/MobileComponent";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, [])

    return (
        <>
            {isMobile ? <Mobile /> : <CirclingNavigationWrapper />}
        </>
    )
}

function CirclingNavigationWrapper() {

    return (
        <div className="w-max h-screen flex overflow-hidden">
            <Navigation />
            <Description />
            <div className="w-12 h-12 rounded-full  border-2 border-white hover:border-gray-600 fixed right-5 bottom-5 p-1 bg-gray-400">
                <div className="w-full h-full flex items-center justify-center p-2">
                    <Link href={'/'}>
                        <svg className="w-8 hover:stroke-gray-600" data-slot="icon" fill="none" strokeWidth={1.5} stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}