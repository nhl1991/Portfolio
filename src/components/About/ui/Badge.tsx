import Image from "next/image"
export default function Badge({ src, alt }: { src: string, alt: string }) {

    return (
        <figure className="relative aspect-[5/1]">
            <Image
                width={160}
                height={20}
                style={{
                    width: "auto"
                }} src={src} unoptimized alt={alt} /></figure>
    )
}