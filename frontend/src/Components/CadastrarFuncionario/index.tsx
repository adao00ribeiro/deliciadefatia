import styles from "./styles.module.scss";
import Input from "../ui/Input";
import Button from "../ui/Button";


export function CadastrarFuncionario() {

    return (
        <div className={styles.containerCadastrar}>
            <h1>Cadastrar Funcionário</h1>
            <form className={styles.form}>
                <div className={styles.group}>
                    <Input type="text" id="nome" name="nome" placeholder="Nome" required /><br /><br />
                </div>
                <div className={styles.group}>
                    <select id="cargo" name="cargo" required>
                        <option value="">Selecione o cargo</option>
                        <option value="gerente">Gerente</option>
                        <option value="caixa">Caixa</option>
                        <option value="pizzaiolo">Pizzaiolo</option>
                        <option value="garcom">Garçom</option>
                    </select><br /><br />
                </div>
                <div className={styles.group}>
                    <Input type="email" id="email" name="email" placeholder="Email" required /><br /><br />
                </div>
                <div className={styles.group}>
                    <Input type="tel" id="telefone" name="telefone" placeholder="Telefone" required /><br /><br />
                </div>
                <Button>Cadastrar</Button>
            </form>
        </div>
    )
}