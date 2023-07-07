import { useContext } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FiLogOut } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'
import Image from "next/image";

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

                <div className={styles.containerAvatar}>
                    <Image src={"/avatarui.png"} fill alt={""}></Image>
                </div>
            </div>
        </header >
    )
}