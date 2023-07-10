import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";


export default _ => {

    return (
        <div className={styles.containerCadastrar}>
            <h1>Caixa</h1>
            <form className={styles.form}>

                <input type="text" id="nome" name="nome" required placeholder="Digite o numero da mesa" /><br /><br />

                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}