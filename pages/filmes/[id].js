import Image from 'next/image'

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
        fallback: true
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

function Filmes(props) {
    return (
        <div class="center">
            <div>
                <h3>Id do filme: {props.id}</h3>
            </div>
            <div>
                <div class="titulo">Título do Filme</div>
                <div class="subtitulo">Gênero | Duração</div>
            </div>
            <div class="center">
                <img src="/anvil.png" class="center"></img>
            </div>
            <div class="wrapper">
                <div>
                    <p class="sinopse">
                        Sinopse
                    </p>
                    <p class="sinopse-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at leo ac mi porttitor vestibulum eu a augue. In purus ipsum, dapibus nec justo a, commodo lacinia leo. Mauris mollis libero et iaculis mattis. Suspendisse non lacus ipsum. Vivamus non lobortis nisi. Pellentesque at vehicula nisl. Aenean placerat viverra tristique.
                    </p>
                </div>
            </div>
        </div>
    )
    // return (

    //     <div>
    //         <div class="container">
    //             <div class="item"><img src="/anvil.png" alt="anvil_image_png"></img></div>
    //             <div class="item-center"><img src="/barrel.png"></img></div>
    //             <div class="item"><img src="/beacon.png"></img></div>
    //         </div>
    //         <div class="container-grid">
    //             <div class="item-grid">abc</div>
    //             <div class="item-grid">abc</div>
    //             <div class="item-grid">abc</div>
    //             <div class="item-grid">abc</div>
    //             <div class="item-grid">abc</div>
    //             <div class="item-grid">abc</div>
    //             <div class="item-grid">abc</div>
    //             ...
    //         </div>
    //     </div>
    // )
}

export default Filmes;