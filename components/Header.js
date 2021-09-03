import Image from "next/image";

export default function Header() {
    return (
        <header className=''>
            <h1>This is the header</h1>
            <Image
            className="object-contain"
            src="https://links.papareact.com/au6"
            width={200}
            height={100} />
        </header>
    );
}
