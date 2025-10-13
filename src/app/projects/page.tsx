'use client'

import Navigation from "@/components/Projects/ProjectNavigation"
import Description from "@/components/Projects/Description"
import Mobile from "@/components/Mobile/MobileComponent";
import { useEffect, useState } from "react";

export default function Page() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, [])

    return (
        <>
            {isMobile ? <Mobile /> : <CirclingNavigationContainer />}
        </>
    )
}

function CirclingNavigationContainer() {

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex overflow-hidden">
                <Navigation />
                <Description />
                
            </div>
        </div>
    )
}