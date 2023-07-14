import React from "react"
import styles from "./styles.module.scss"
import { RiCloseFill } from 'react-icons/ri'
import Image from "next/image"
import Button from "../../ui/Button"

interface IModalDetalhePedido {
    IsOpen: boolean
    CloseModal: () => void
}

export function ModalDetalhePedido(Modal: IModalDetalhePedido) {
    const test = `400g de peito de frango Seara DaGranja
Água
4 colheres de orégano
400g de queijo catupiry
1 xícara de chá de molho de tomate
Sal, pimenta e salsinha a gosto`;

    const ingredientsArray = test.split('\n');


    return (
        <dialog id="dialogDetalheProcesso" className={styles.modal} open={Modal.IsOpen}>
            <div className={styles.containerModal}>
                <div className={styles.childdivmodal}>
                    <h2>Pedido Mesa 12</h2>
                    <RiCloseFill className={styles.close} onClick={Modal.CloseModal} />
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <span>1 - Pizza frango com catupiry</span>
                        <div className={styles.containerInformacoes}>
                            <span>
                                {
                                    ingredientsArray.map(
                                        (item, index) => {
                                            return <li key={index}>{item}</li>
                                        }
                                    )
                                }
                            </span>
                            <div className={styles.containerImage}>
                                <Image src={"/Pizzafrangocatupiry.png"} alt={""} fill></Image>
                            </div>
                        </div>


                    </div>


                </div>
                <Button>Concluir Pedido</Button>
            </div>
        </dialog>
    )
}