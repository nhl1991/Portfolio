export 
function ListItem({ items }: { items: Array<string> }) {


    return (
        <div className="flex gap-2 p-2 items-center">

            {
                items.map((item, index) => {
                    return <p key={index} className="px-4 py-2 rounded-2xl bg-sky-600">{item.toUpperCase()}</p>
                })
            }
        </div>
    )
}