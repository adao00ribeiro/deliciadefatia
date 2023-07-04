import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FiLogOut } from 'react-icons/fi'


export function Header() {

    return (
        < header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <img src="/logo.svg" width={190} height={60}></img>
                </Link>
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