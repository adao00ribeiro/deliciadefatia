import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Button from "../ui/Button";
import Input from "../ui/Input";


export function CadastrarProduto() {

    return (
        <div className={styles.containerCadastrar}>
            <h1>Novo Produto</h1>
            <form className={styles.form}>
                <Input type="text" id="nome" name="nome" required />
                <select id="cargo" name="cargo" required>
                    <option value="">Selecione o cargo</option>
                    <option value="gerente">Gerente</option>
                    <option value="caixa">Caixa</option>
                    <option value="pizzaiolo">Pizzaiolo</option>
                    <option value="garcom">Garçom</option>
                </select>
                <Input type="email" id="email" name="email" required />
                <Input type="tel" id="telefone" name="telefone" required />
                <Button>Cadastrar</Button>
            </form >
        </div >
    )
}