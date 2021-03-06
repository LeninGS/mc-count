import React, { useState } from 'react';
import Link from 'next/link';
import { Hero, Navbar, Content, Samples, SideBar } from '../Components/styled';

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

export default function Home(props) {
    const [pickaxe, setPickaxe] = useState("/wooden_pickaxe.png");
    const [blockMining, setBlockMining] = useState("/cobblestone.png");
    const [clickCount, setClickCount] = useState(0);

    function showClickingText() {
        if (clickCount > 0 && clickCount == 1) {
            return `Você clicou ${clickCount} vez.`;
        } else if (clickCount > 0) {
            return `Você clicou ${clickCount} vezes.`;
        }
    }

    return (
        <>
            <body>
                <Hero>
                    <Navbar>
                        <img src="/Set_your_amount.gif" class="logo" name="logo"></img>
                        <Link href="/">
                            <button type="button" class="button" name="home">Home</button>
                        </Link>
                        <button type="button" class="button" name="about">About</button>
                    </Navbar>
                    <Content>
                        <small>Welcome to</small>
                        <h1>Mine Count</h1>
                        <span>
                            <h3>Coming soon</h3>
                        </span>
                        <div class="mining">
                            <span class="cobblestone">
                                <img src={blockMining} onClick={() => setClickCount(clickCount + 1)}></img>
                            </span>
                            <span class="pickaxe">
                                <img id="pickaxe" src={pickaxe}></img>
                            </span>
                            <span class='text-clicking'>
                                {showClickingText()}
                            </span>
                        </div>
                    </Content>
                    <Samples>
                        <div>
                            <img src="/Set_your_amount.gif"></img>
                            <div>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod massa ac arcu tempor vehicula. Donec efficitur pulvinar ipsum, ut auctor enim feugiat sit amet. Duis ut turpis at erat dignissim feugiat a eu ipsum. Nulla elementum, tellus et pretium egestas, risus est posuere enim, sit amet faucibus tellus augue eget risus.</div>
                        </div>
                        <div>
                            <img src="/Set_your_amount.gif"></img>
                            <div>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod massa ac arcu tempor vehicula. Donec efficitur pulvinar ipsum, ut auctor enim feugiat sit amet. Duis ut turpis at erat dignissim feugiat a eu ipsum. Nulla elementum, tellus et pretium egestas, risus est posuere enim, sit amet faucibus tellus augue eget risus.</div>
                        </div>
                        <div>
                            <img src="/Set_your_amount.gif"></img>
                            <div>3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod massa ac arcu tempor vehicula. Donec efficitur pulvinar ipsum, ut auctor enim feugiat sit amet. Duis ut turpis at erat dignissim feugiat a eu ipsum. Nulla elementum, tellus et pretium egestas, risus est posuere enim, sit amet faucibus tellus augue eget risus.</div>
                        </div>
                    </Samples>
                    <SideBar>
                        <div class="menu-items">
                            <img src="/chest.gif"></img>
                            <img src="/diamond.png" onClick={() => { setPickaxe("/diamond_pickaxe.png"); setBlockMining("/obsidian_block.png") }}></img>
                            <img src="/gold_ingot.png" onClick={() => { setPickaxe("/golden_pickaxe.png"); setBlockMining("/lapis_lazuli_ore.png") }}></img>
                            <img src="/iron_ingot.png" onClick={() => { setPickaxe("/iron_pickaxe.png"); setBlockMining("/redstone_ore.png") }}></img>
                        </div>
                    </SideBar>
                </Hero>
            </body>
        </>
    )
};