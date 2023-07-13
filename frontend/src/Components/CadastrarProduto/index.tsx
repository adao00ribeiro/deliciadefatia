import { useContext, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { FiUpload } from "react-icons/fi";


export function CadastrarProduto() {
    const [imageUrl, setimageUrl] = useState('');
    const [imageAvatar, setimageAvatar] = useState(null);
    return (
        <div className={styles.containerCadastrar}>
            <h1>Novo Produto</h1>
            <form className={styles.form}>

                <label className={styles.labelAvatar}>
                    <span>
                        <FiUpload size={30} color="#FFF" />
                    </span>
                    <input type="file" accept="image/png, image/jpeg" />

                    {
                        imageUrl &&
                        <img
                            className={styles.preview}
                            src={''}
                            alt="Foto do produto"
                            width={250}
                            height={250}
                        />
                    }

                </label>
                <Input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    placeholder="Nome produto"
                />
                <select id="categoria" name="categoria" required>
                    <option value="">Selecione a categoria</option>
                    <option value="1">Gerente</option>
                    <option value="2">Caixa</option>
                    <option value="3">Pizzaiolo</option>
                    <option value="4">Garçom</option>
                </select>
                <Input
                    type="preco"
                    id="preco"
                    name="preco"
                    required
                    placeholder="Preço do produto"
                />
                <Input
                    type="descricao"
                    id="descricao"
                    name="descricao"
                    required
                    placeholder="Descricao do produto"
                />
                <Button>Cadastrar</Button>
            </form >
        </div >
    )
}