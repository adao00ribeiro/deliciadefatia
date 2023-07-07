import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FiLogOut } from 'react-icons/fi'


export function SideBar() {





    const mostrarOpcoes = () => {
        var opcoes = document.getElementById("opcoes");
        if (opcoes.style.display === "none") {
            opcoes.style.display = "block"; // Mostra as opções
        } else {
            opcoes.style.display = "none"; // Esconde as opções
        }
    }
    return (
        < aside className={styles.side}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href={""} onClick={mostrarOpcoes}>
                            Cadastrar
                        </Link>
                        <div id="opcoes" className={styles.opcoes}>
                            <p>Funcionario</p>
                            <p>Categorias</p>
                            <p>Produtos</p>
                        </div>
                    </li>
                    <li>
                        <Link href={""}  >Caixa</Link>
                    </li>


                    <li>
                        <Link href={""}   >Pedidos</Link>
                    </li>
                </ul>
            </nav>
        </aside >
    )
}