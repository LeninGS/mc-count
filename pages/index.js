import React, { useState } from 'react';
import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Olá, mundo!</h1>
        <h2>
            <Link href="/sobre">
                <a>Acessar Sobre</a>
            </Link>
        </h2>

        <Counter />
    </div>);
}

function Counter() {
    // Declarar uma nova variável de state, na qual chamaremos de "count"
    const [count, setCount] = useState(1);

    function adicionarContador() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>
                Você clicou {count} vezes.
            </p>
            <button onClick={adicionarContador}>
                Clique aqui
            </button>
        </div>
    );
}

export default Home;