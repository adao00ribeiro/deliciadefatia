import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";


export function CadastrarCategoria() {

    return (
        <div className={styles.containerCadastrar}>
            <h1>Cadastrar Funcionário</h1>
            <form className={styles.form}>
                <div className={styles.group}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required /><br /><br />
                </div>
                <div className={styles.group}>
                    <label htmlFor="cargo">Cargo:</label>
                    <select id="cargo" name="cargo" required>
                        <option value="">Selecione o cargo</option>
                        <option value="gerente">Gerente</option>
                        <option value="caixa">Caixa</option>
                        <option value="pizzaiolo">Pizzaiolo</option>
                        <option value="garcom">Garçom</option>
                    </select><br /><br />
                </div>
                <div className={styles.group}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required /><br /><br />
                </div>
                <div className={styles.group}>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required /><br /><br />
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}