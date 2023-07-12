import Button from "../ui/Button";
import Input from "../ui/Input";
import styles from "./styles.module.scss";


export function CadastrarCategoria() {

    return (
        <div className={styles.containerCategoria}>
            <h1>Nova Categoria</h1>
            <form className={styles.form}>
                <Input type="text" id="nome" name="nome" required placeholder="Digite o nome para a categoria" />
                <Button >Cadastrar</Button>
            </form>
        </div>
    )
}