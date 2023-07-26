
import { useCallback, useEffect, useState } from "react";
import useOrders from "../../Store/useOrders";
import CardPedido from "./CardPedido";
import styles from "./styles.module.scss";
import GetOrders from "../../services/funcoes/GetOrders";


export default _ => {
  const orders = useOrders(state => state.orders);
  const setOrders = useOrders(state => state.setOrders);



  const minhaFuncao = useCallback(async () => {
    try {
      setOrders(await GetOrders());
    } catch (error) {
      alert(error.response.data)
    }
  }, [setOrders])

  useEffect(() => {
    // Use o setInterval para chamar a função a cada 5 segundos
    const intervalId = setInterval(minhaFuncao, 5000);
    // Retorne uma função de limpeza para parar o setInterval quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [minhaFuncao]); // A lista de dependências vazia garante que o useEffect será executado apenas uma vez ao montar o componente

  return (
    <>
      <div className={styles.containerCadastrar}>
        <h1>Pedidos</h1>
        {orders && orders.map((item, index) => {
          return < CardPedido key={index} order={item} />
        })
        }
      </div>
    </>

  )
}