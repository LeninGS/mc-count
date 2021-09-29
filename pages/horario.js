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
export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Horario;