
export default function DescriptionText({ children }: { children: React.ReactNode }) {

    return (
        <span className="">
            <p className="list-item-description rounded-2xl text-left">{children}</p>
        </span>
    )
}