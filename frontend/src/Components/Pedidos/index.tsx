import styles from "./styles.module.scss";


export default _ => {

    return (
        <div className={styles.containerCadastrar}>
            <h1>Pedidos</h1>
            <form className={styles.form}>

                <input type="text" id="nome" name="nome" required placeholder="Digite o numero da mesa" /><br /><br />

                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}