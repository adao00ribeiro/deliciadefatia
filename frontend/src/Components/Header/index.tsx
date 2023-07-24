import styles from "./styles.module.scss";
import { FaBars } from 'react-icons/fa'
import Image from "next/image";
import useSideBar from "../../Store/useSideBar";
import PerfilOption from "../PerfilOption";
import { useEffect, useRef, useState } from "react";

export function Header() {

    const [IsOption, setIsOption] = useState(false);
    const containerRef = useRef(null);
    const isactive = useSideBar(state => state.IsActive);
    const setIsActive = useSideBar(state => state.setIsActive);

    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOption(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const showNavbar = () => {
        setIsActive(!isactive)
    }

    const handlePerfilOption = () => {
        setIsOption(!IsOption);
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

                <div ref={containerRef} className={styles.containerAvatar} onClick={handlePerfilOption} >
                    <Image src={"/avatarui.png"} fill alt={""}></Image>

                    {IsOption &&
                        <PerfilOption></PerfilOption>
                    }

                </div>

            </div>
        </header >
    )
}