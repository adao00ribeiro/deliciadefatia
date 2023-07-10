import styles from "./styles.module.scss";


export function CadastrarCategoria() {

    return (
        <div className={styles.containerCategoria}>
            <h1>Nova Categoria</h1>
            <form className={styles.form}>
                <input type="text" id="nome" name="nome" required placeholder="Digite o nome para a categoria" /><br /><br />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}