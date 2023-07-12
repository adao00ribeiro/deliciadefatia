import { createRef, useContext, useRef } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { FiLogOut } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'
import Image from "next/image";
import useSideBar from "../../Store/useSideBar";

export function Header() {
    const isactive = useSideBar(state => state.IsActive);
    const setIsActive = useSideBar(state => state.setIsActive);
    const showNavbar = () => {
        setIsActive(!isactive)
    }
    return (
        < header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.headerLeft}>
                    <button className={styles.btnHamburguer} onClick={showNavbar}>
                        <FaBars size={40}></FaBars>
                    </button>
                    <span >
                        Delicia de Fatia
                    </span>
                </div>

                <div className={styles.containerAvatar}>
                    <Image src={"/avatarui.png"} fill alt={""}></Image>
                </div>
            </div>
        </header >
    )
}