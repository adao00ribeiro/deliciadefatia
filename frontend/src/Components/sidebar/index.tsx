import { useCallback, useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FiLogOut } from 'react-icons/fi'
import useCurrentScreen from "../../Store/useCurrentScreen";
import { ECurrentScreen } from "../../enums/ECurrentScreen";


export function SideBar() {

    const setcurrent = useCurrentScreen(state => state.setCurrent)

    const mostrarOpcoes = () => {
        var opcoes = document.getElementById("opcoes");
        if (opcoes.style.display === "none") {
            opcoes.style.display = "block"; // Mostra as opções
        } else {
            opcoes.style.display = "none"; // Esconde as opções
        }
    }
    const handleClick = useCallback((newcurrent: ECurrentScreen) => {
        setcurrent(newcurrent)
    }, [])
    return (
        < aside className={styles.side}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href={""} onClick={mostrarOpcoes}>
                            Cadastrar
                        </Link>
                        <div id="opcoes" className={styles.opcoes}>
                            <Link
                                onClick={() => { handleClick(ECurrentScreen.CADASTROFUNCIONARIO); }} href={""}>
                                Funcionario
                            </Link>
                            <Link
                                onClick={() => { handleClick(ECurrentScreen.CADASTROCATEGORIA); }}
                                href={""}>
                                Categorias
                            </Link>
                            <Link
                                onClick={() => { handleClick(ECurrentScreen.CADASTROPRODUTO); }}
                                href={""}>
                                Produtos
                            </Link>
                        </div>
                    </li>
                    <li>
                        <Link
                            href={""}
                            onClick={() => { handleClick(ECurrentScreen.CAIXA); }} >Caixa</Link>
                    </li>


                    <li>
                        <Link
                            href={""}
                            onClick={() => { handleClick(ECurrentScreen.PEDIDOS); }}  >Pedidos</Link>
                    </li>
                </ul>
            </nav>
        </aside >
    )
}