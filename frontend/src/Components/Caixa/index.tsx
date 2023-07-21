import { ChangeEvent, FormEvent, useCallback, useContext, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Button from "../ui/Button";
import Input from "../ui/Input";
import useOrders from "../../Store/useOrders";



export default _ => {

    const orders = useOrders(state => state.orders)
    const [valorSelecionado, setValorSelecionado] = useState(orders?.at(0)['id'] || '');
    const handleSelecionarOpcao = (event) => {
        setValorSelecionado(event.target.value);
    };
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (!valorSelecionado) {
            return;
        }


        alert("abre modal")
    }
    return (
        <div className={styles.containerCadastrar}>
            <h1>Caixa</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="select">Selecione uma Mesa:</label>
                <select
                    id="select"
                    name="select"
                    value={valorSelecionado}
                    onChange={handleSelecionarOpcao}
                >
                    {orders.map((item, index) => {
                        return <option key={index} value={item['id']}>Mesa {item['table']}</option>
                    })}

                </select>
                <Button type="submit">Consultar</Button>
            </form>
        </div>
    )
}