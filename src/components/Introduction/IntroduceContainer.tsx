

export default function IntroduceContainer({
    children
}: { children: React.ReactNode }) {


    return (
        <div id="introducePanel" className="w-[100vw] h-[100vh] flex items-center justify-center ">

            <h1 id="title" className="header_text">{children}</h1>
        </div>

    )
}