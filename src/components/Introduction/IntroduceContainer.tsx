

export default function IntroductionWrapper({
    children
}: { children: React.ReactNode }) {


    return (
        <div id="introductionContainer" className="w-[100vw] h-[100vh] flex flex-col items-center justify-center ">
            {children}
        </div>

    )
}