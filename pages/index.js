import React, { useState } from 'react';

function Home() {
    return <div><h1>Olá, mundo!</h1>
        <Counter />
    </div>;
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