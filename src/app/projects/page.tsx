import Navigation from "@/components/CirclingNavigation/circleNavigation"
import Description from "@/components/CirclingNavigation/Description"

export default function Page(){


    return (
        <>
            <CirclingNavigationWrapper />
        </>
    )
}

function CirclingNavigationWrapper() {

    return (
        <div className="w-max h-screen flex overflow-hidden">
            <Navigation />
            <Description />
        </div>
    )
}