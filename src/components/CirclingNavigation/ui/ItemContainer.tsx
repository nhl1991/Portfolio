export 
function ListItem({ items }: { items: Array<string> }) {


    return (
        <div className="flex gap-1 md:gap-2 md:p-2 items-center">

            {
                items.map((item, index) => {
                    return <p key={index} className="px-2 py-0.5 rounded-xl md:px-4 md:py-2 md:rounded-2xl text-white bg-sky-600">{item.toUpperCase()}</p>
                })
            }
        </div>
    )
}