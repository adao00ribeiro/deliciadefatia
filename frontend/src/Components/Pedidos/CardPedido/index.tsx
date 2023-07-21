import { useState } from "react";
import { ModalDetalhePedido } from "../../Modal/ModalDetalhePedido";
import styles from "./styles.module.scss";

interface ICardPedido {
    table: number
}
export default (props: ICardPedido) => {
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
                <span>Mesa {props.table}</span>
                <div>
                </div>
            </div>
            <ModalDetalhePedido IsOpen={IsOpenModal} CloseModal={CloseModal} />
        </>

    )
}