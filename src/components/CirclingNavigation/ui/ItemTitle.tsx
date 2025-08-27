export 
function ListTitle({ title }: { title: string }) {


    return (
        <div className="flex items-center p-1">
            <h3 className="font-bold">{title}</h3>
        </div>
    )
}
