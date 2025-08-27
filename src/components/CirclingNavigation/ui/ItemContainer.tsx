export 
function ListItem({ items }: { items: Array<string> }) {


    return (
        <div className="flex gap-2">

            {
                items.map((item, index) => {
                    return <div key={index} className="px-2 py-0.5 md:rounded-2xl rounded-xl text-white bg-sky-600"><p key={index} className="p-1">{item.toUpperCase()}</p></div>
                })
            }
        </div>
    )
}