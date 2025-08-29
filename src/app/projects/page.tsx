'use client'

import Navigation from "@/components/CirclingNavigation/circleNavigation"
import Description from "@/components/CirclingNavigation/Description"
import Mobile from "@/components/Mobile/MobileComponent";
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
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex overflow-hidden">
                <Navigation />
                <Description />
                
            </div>
        </div>
    )
}