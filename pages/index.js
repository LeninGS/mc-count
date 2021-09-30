import React, { useState } from 'react';
import Link from 'next/link';

function HomeOld() {
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

export default function Home() {
    return (
        <body>
            <div class="hero">
                <div class="navbar">
                    <img src="/Set_your_amount.gif" class="logo" name="logo"></img>
                    <Link href="/">
                        <button type="button" class="button" name="home">Home</button>
                    </Link>
                    <button type="button" class="button" name="about">Sobre</button>
                </div>
                <div class="content">
                    <small>Bem-vindo(a) ao</small>
                    <h1>Mine Count</h1>
                    <div class="mining">
                        <span class="cobblestone">
                            <img src="/cobblestone.png"></img>
                        </span>
                        <span class="pickaxe">
                            <img src="/golden_pickaxe.png"></img>
                        </span>
                    </div>


                </div>
                <div class="side-bar">
                    <div class="menu-items">
                        <img src="/chest.gif"></img>
                        <img src="/diamond.png" ></img>
                        <img src="/gold_ingot.png"></img>
                        <img src="/iron_ingot.png"></img>
                    </div>

                </div>
            </div>
        </body >
    )
};