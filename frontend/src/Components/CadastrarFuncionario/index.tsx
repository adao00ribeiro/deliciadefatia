import styles from "./styles.module.scss";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FormEvent, useCallback, useState } from "react";


export function CadastrarFuncionario() {
    const [Inputs, setInputs] = useState({
        nome: "",
        cargo: "",
        email: "",
        Telefone: "",
        Senha: ""
    })

    const handleCadastrar = useCallback(async (event: FormEvent) => {
        event.preventDefault();

    },[])

    return (
        <div className={styles.containerCadastrar}>
            <h1>Cadastrar Funcionário</h1>
            <form className={styles.form} onSubmit={handleCadastrar}>
                    <Input type="text" id="nome" name="nome" placeholder="Nome" required />
                    <select id="cargo" name="cargo" required>
                        <option value="">Selecione o cargo</option>
                        <option value="gerente">Gerente</option>
                        <option value="caixa">Caixa</option>
                        <option value="pizzaiolo">Pizzaiolo</option>
                        <option value="garcom">Garçom</option>
                    </select>
                    <Input type="email" id="email" name="email" placeholder="Email" required />
                    <Input type="tel" id="telefone" name="telefone" placeholder="Telefone" required />
                    <Input type="tel" id="senha" name="senha" placeholder="Senha" required />
                <Button type="submit">Cadastrar</Button>
            </form>
        </div>
    )
}