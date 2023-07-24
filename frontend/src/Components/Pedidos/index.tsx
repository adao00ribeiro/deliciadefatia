
import { useEffect, useState } from "react";
import useOrders from "../../Store/useOrders";
import CardPedido from "./CardPedido";
import styles from "./styles.module.scss";


export default _ => {
    const orders = useOrders(state => state.orders);
    const [listaOrder, setlistaOrder] = useState(orders)
    const minhaFuncao = () => {
        console.log('Esta função será chamada a cada 5 segundos.');
        // Faça o que quiser aqui
    };
    useEffect(() => {
        // Use o setInterval para chamar a função a cada 5 segundos
        const intervalId = setInterval(minhaFuncao, 5000);

        // Retorne uma função de limpeza para parar o setInterval quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, []); // A lista de dependências vazia garante que o useEffect será executado apenas uma vez ao montar o componente

    return (
        <>
            <div className={styles.containerCadastrar}>
                <h1>Pedidos</h1>
                {listaOrder.map((item, index) => {
                    return < CardPedido key={index} order={item} />
                })
                }
            </div>
        </>

    )
}