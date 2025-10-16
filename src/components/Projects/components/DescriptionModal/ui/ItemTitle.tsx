export function ListTitle({ title }: { title: string }) {
    return (
        <div className="flex items-center">
            <h4 className="font-bold">{title}</h4>
        </div>
    )
}
