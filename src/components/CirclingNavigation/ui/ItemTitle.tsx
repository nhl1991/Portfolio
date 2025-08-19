export 
function ListTitle({ title }: { title: string }) {


    return (
        <div className="flex gap-2 p-1 md:p-2 items-center">
            <h1 className="px-2 py-0.5 md:py-2 rounded-2xl font-bold">{title}</h1>
        </div>
    )
}
