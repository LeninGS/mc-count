function Horario(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        //um exemplo de dado dinâmico atualizado com F5, mas suscetível a interperies do servidor
        <div>
            <div>{dynamicDateString} (horário dinâmico)</div>
            <div>{props.staticDateString} (horário estático)</div>
        </div>
    )
}

//NADA dentro do getStaticProps vai apra o frontend
//IMPORTANTE para o CONGELAMENTO de informações antes de enviar para o frontend
//VANTAGEM do banco de dados cair e o valor permanecer
export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Horario;