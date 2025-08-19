

export default function IntroductionWrapper({
    children
}: { children: React.ReactNode }) {


    return (
        <div id="introductionContainer" className="w-[100vw] h-[100vh]  ">
            {children}
        </div>

    )
}