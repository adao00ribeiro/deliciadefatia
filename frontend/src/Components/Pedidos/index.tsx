import Button from "../ui/Button";
import Input from "../ui/Input";
import CardPedido from "./CardPedido";
import styles from "./styles.module.scss";


export default _ => {

    return (
        <div className={styles.containerCadastrar}>
            <h1>Pedidos</h1>
            <CardPedido />

        </div>
    )
}