export default function ListTextComponent({ title, listItems }: { title: string, listItems: string[] }) {

    return (
        <li className="w-full px-2 py-1 my-2">
            <h1 className="text-2xl font-extrabold">{title}</h1>
            <div className="text-xl px-4 py-4 flex gap-2 items-center">
                {listItems ? listItems.map((item: string, index: number) => {
                    return <p className={`font-semibold px-4 py-1 rounded-2xl ${item === 'なし' ? 'bg-red-400' :'bg-sky-600'}`} key={index}>{item}</p>
                }) : null}
            </div>
        </li>
    )
}