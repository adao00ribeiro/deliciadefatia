import React from "react"
import styles from "./styles.module.scss"
import { RiCloseFill } from 'react-icons/ri'

interface IModalDetalhePedido {
    IsOpen: boolean
    CloseModal: () => void
}

export function ModalDetalhePedido(Modal: IModalDetalhePedido) {

    return (
        <dialog id="dialogDetalheProcesso" className={styles.modal} open={Modal.IsOpen}>
            <div className={styles.containerModal}>
                <div className={styles.childdivmodal}>
                    <h2>Detalhe do pedido</h2>
                    <RiCloseFill className={styles.close} />
                </div>
                <div className={styles.containerInformacoes}>
                    <h1>asdasdasdsa</h1>
                </div>
            </div>
        </dialog>
    )
}