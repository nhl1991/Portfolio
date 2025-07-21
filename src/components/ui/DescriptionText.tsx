
export default function DescriptionText({children}: {children : React.ReactNode}){

    return(
        <>
            <p className="list-item-description text-center">{children}</p>
        </>
    )
}