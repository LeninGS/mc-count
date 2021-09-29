import Link from 'next/link';

function Sobre() {
    return (<div>
        <h1>Olá, mundo!</h1>
        <h2>
            <Link href="/">
                <a>Acessar Home</a>
            </Link>
        </h2>
    </div>);
}

export default Sobre;