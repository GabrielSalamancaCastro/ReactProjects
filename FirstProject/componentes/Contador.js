
const Contador = () => {

    const [contador, setContador] = React.useState(0);
    //const aforoMaximo =prompt("¿Cual es el aforo maximo de tu negocio?");
    const aforoMaximo =10;
    const aumentar = () => setContador(contador < aforoMaximo ? contador +1 : contador=aforoMaximo);
    const disminuir = () => setContador(contador > 0 ? contador -1 : contador=0);
    

    return (
    <div>
        <h1 className = {contador < aforoMaximo ? "normal" : "lleno"} > AFORO: {contador} </h1>
        <hr/>
        <button onClick = {aumentar}> AUMENTAR CONTADOR </button>
        <button onClick = {disminuir}> DISMINUIR CONTADOR </button>
    </div>    
    )
}