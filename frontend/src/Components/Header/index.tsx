import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FiLogOut } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'

export function Header() {

    return (
        < header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.headerLeft}>
                <button className={styles.btnHamburguer} >
                    <FaBars size={50}></FaBars>
                </button>
                <Link href="/dashboard">
                   Delicia de Fatia
                </Link>
                </div>
               
                <nav className={styles.menuNav}>
                    <Link href="/category">
                        Categoria
                    </Link>
                    <Link href="/product">
                        Cardapio
                    </Link>
                    <button >
                        <FiLogOut color="#FFF" size={24} />
                    </button>
                </nav>
            </div>
        </header >
    )
}