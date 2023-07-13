import { useState } from "react";
import { ModalDetalhePedido } from "../../Modal/ModalDetalhePedido";
import styles from "./styles.module.scss";


export default _ => {
    const [IsOpenModal, setIsOpenModal] = useState(false)

    const OpenModal = () => {
        setIsOpenModal(true);
    }
    const CloseModal = () => {
        setIsOpenModal(false);
    }
    return (
        <>
            <div className={styles.cardPedido} onClick={OpenModal}>
                <div>
                </div>
                <span>Mesa 30</span>
                <div>
                </div>
            </div>
            <ModalDetalhePedido IsOpen={IsOpenModal} CloseModal={CloseModal} />
        </>

    )
}