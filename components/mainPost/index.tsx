import Image from "next/image";

export default function MainPost() {
    return (
        <div className="mt-16 cursor-pointer bg-[#F5F5F5]">
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