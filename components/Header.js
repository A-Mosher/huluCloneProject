import Image from "../images/Hulu_(2).png";

export default function Header() {
    return (
        <header className=''>
            <h1>This is the header</h1>
            <Image
            className="object-contain"
            src={Image}
            alt='hulu logo image'
            width={200}
            height={100} />
        </header>
    );
}
