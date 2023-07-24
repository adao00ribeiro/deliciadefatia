import { useState } from "react";
import { ModalDetalhePedido } from "../../Modal/ModalDetalhePedido";
import styles from "./styles.module.scss";
import { IOrder } from "../../../interfaces/IOrder";

interface ICardPedido {
    order: IOrder
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
                <span>Mesa {props.order.table}</span>
                <div>
                </div>
            </div>
            <ModalDetalhePedido IsOpen={IsOpenModal} CloseModal={CloseModal} order={props.order} />
        </>

    )
}