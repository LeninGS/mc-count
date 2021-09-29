import React, { useState } from 'react';

function Home() {
    return <div > < h1 > Home 2 < /h1> <
    Counter / >
        <
        /div >;
}

function Counter() {
    // Declarar uma nova variável de state, na qual chamaremos de "count"
    const [count, setCount] = useState(1);

    function adicionarContador() {
        setCount(count + 1)
    }

    return ( <
        div >
        <
        p > You clicked { count }
        times < /p> <
        button onClick = { adicionarContador } >
        Click me <
        /button> < /
        div >
    );
}

export default Home;