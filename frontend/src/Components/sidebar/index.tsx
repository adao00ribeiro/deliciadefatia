import { createRef, useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FiLogOut } from 'react-icons/fi'
import useCurrentScreen from "../../Store/useCurrentScreen";
import { ECurrentScreen } from "../../enums/ECurrentScreen";
import useSideBar from "../../Store/useSideBar";


export function SideBar() {
    const isactive = useSideBar(state => state.IsActive);
    const [opcoes, setopcoes] = useState(false);
    const setcurrent = useCurrentScreen(state => state.setCurrent)

    const mostrarOpcoes = () => {
        var opcoes = document.getElementById("opcoes");
        if (opcoes.style.display === "none") {
            opcoes.style.display = "flex"; // Mostra as opções
        } else {
            opcoes.style.display = "none"; // Esconde as opções
        }
    }

    const handleClick = useCallback((newcurrent: ECurrentScreen) => {
        setopcoes(false);
        setcurrent(newcurrent)
    }, [])

    return (
        < aside className={isactive ? styles.side : styles.sidehidden}  >
            <nav className={styles.nav}>
                <ul>
                    <a onClick={mostrarOpcoes}>
                        Cadastrar
                    </a>
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
                    <a
                        onClick={() => { handleClick(ECurrentScreen.CAIXA); }} >Caixa</a>
                    <a
                        onClick={() => { handleClick(ECurrentScreen.PEDIDOS); }}  >Pedidos
                    </a>
                </ul>
            </nav>
        </aside >
    )
}