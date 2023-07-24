import { ChangeEvent, FormEvent, useCallback, useContext, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { FiUpload } from "react-icons/fi";
import { GetServerSideProps } from "next";
import axios from "axios";
import useCategorys from "../../Store/useCategory";


export function CadastrarProduto() {

    const categorys = useCategorys(state => state.categorys);

    const [Inputs, setInputs] = useState({
        nome: "",
        categoria: "",
        preco: "",
        descricao: "",
        imageUrl: "",
        imageAvatar: null,
    });

    const handleSelecionarOpcao = useCallback((event) => {
        const { name, value } = event.target;
        setInputs({ ...Inputs, [name]: value });

    }, [Inputs]);

    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {

        console.log(event.target)


        if (!event.target.files) {
            return;
        }

        const image = event.target.files[0];
        if (!image) {
            return;
        }
        if (image.type === 'image/jpeg' || image.type === 'image/png') {

            setInputs({ ...Inputs, imageAvatar: image });
            setInputs({ ...Inputs, imageUrl: URL.createObjectURL(event.target.files[0]) })
        }
    }
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        console.log(Inputs)
    }
    return (
        <div className={styles.containerCadastrar}>
            <h1>Novo Produto</h1>
            <form className={styles.form} onSubmit={handleSubmit}>

                <label className={styles.labelAvatar}>
                    <span>
                        <FiUpload size={30} color="#FFF" />
                    </span>
                    <input type="file" accept="image/png, image/jpeg" onChange={handleFile} />

                    {
                        Inputs.imageUrl &&
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
                    value={Inputs.nome}
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    onChange={handleSelecionarOpcao}
                    placeholder="Nome produto"
                />
                <select
                    value={Inputs.categoria}
                    id="categoria"
                    name="categoria"
                    onChange={handleSelecionarOpcao}
                    required
                >
                    {categorys.map((item, index) => {
                        return <option key={index} value={item['id']}>{item['name']}</option>
                    })}

                </select>
                <Input
                    value={Inputs.preco}
                    type="preco"
                    id="preco"
                    name="preco"
                    required
                    onChange={handleSelecionarOpcao}
                    placeholder="Preço do produto"
                />
                <Input
                    value={Inputs.descricao}
                    type="descricao"
                    id="descricao"
                    name="descricao"
                    required
                    onChange={handleSelecionarOpcao}
                    placeholder="Descricao do produto"
                />
                <Button type="submit">Cadastrar</Button>
            </form >
        </div >
    )
}
