
import SignOut from "../../services/Sign/SignOut";
import styles from "./styles.module.scss";
export default () => {
    return (
        <div className={styles.container}>
            <button>Perfil</button>
            <button onClick={SignOut}>Sair</button>
        </div>
    )
}