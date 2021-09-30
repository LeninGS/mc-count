import Image from 'next/image'
import Link from 'next/link';

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                id: '1'
            }
        }, {
            params: {
                id: '2'
            }
        }],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}

// export async function getServerSideProps(context) {
//     const id = context.query.id;

//     return {
//         props: {
//             id: id
//         }
//     }
// }

export default function Filmes(props) {
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
                    <div class="pickaxe">
                        <img src="/golden_pickaxe.png"></img>
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
        </body>
    )
};