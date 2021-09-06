import Image from "next/image";
import image from "../images/Hulu_(2).png";

export default function Header() {
    return (
        <header className=''>
            <h1>This is the header</h1>
            <Image
            className="object-contain"
            src={image}
            alt='hulu logo image'
            width={200}
            height={100} />
        </header>
    );
}
