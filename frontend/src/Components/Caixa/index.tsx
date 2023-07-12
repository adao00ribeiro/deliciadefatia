import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Button from "../ui/Button";
import Input from "../ui/Input";


export default _ => {

    return (
        <div className={styles.containerCadastrar}>
            <h1>Caixa</h1>
            <form className={styles.form}>

                <Input type="text" id="nome" name="nome" required placeholder="Digite o numero da mesa" />

                <Button>Cadastrar</Button>
            </form>
        </div>
    )
}