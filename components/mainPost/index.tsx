import Image from "next/image";

export default function MainPost() {
    return (
        <div className="mt-16 cursor-pointer container mx-auto">
            <Image
                src="/MainPost.svg"
                alt="Noticia principal"
                width={1240} 
                height={350} 
                objectFit="contain"
            />
        </div>
    );
}