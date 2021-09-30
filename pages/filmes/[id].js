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
        <div>
            <h3>Id do filme: {props.id}</h3>
        </div>
    )
}

export default Filmes;