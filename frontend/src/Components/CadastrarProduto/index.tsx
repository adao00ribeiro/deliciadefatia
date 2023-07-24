import { ChangeEvent, FormEvent, useCallback, useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { FiUpload } from "react-icons/fi";
import useCategorys from "../../Store/useCategory";
import RegisterProduct from "../../services/funcoes/RegisterProduct";
import GetCategorys from "../../services/funcoes/GetCategorys";



export function CadastrarProduto() {

    const categorys = useCategorys(state => state.categorys);
    const setcategorys = useCategorys(state => state.setCategorys);
    const [Inputs, setInputs] = useState({
        nome: "",
        categoria: "",
        preco: "",
        descricao: "",
        imageUrl: "",
        imageAvatar: null,
    });
    useEffect(() => {
        GetCategorys()
            .then((list) => {
                setcategorys(list)
            })
            .catch((error) => {

            })

    }, [])
    const handleSelecionarOpcao = useCallback((event) => {
        const { name, value } = event.target;
        setInputs({ ...Inputs, [name]: value });

    }, [Inputs]);

    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }

        const image = event.target.files[0];
        if (!image) {
            return;
        }
        if (image.type === 'image/jpeg' || image.type === 'image/png') {

            setInputs({
                ...Inputs,
                imageUrl: URL.createObjectURL(event.target.files[0]),
                imageAvatar: image
            })
        }
    }
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (!Inputs.imageAvatar) {
            alert("Imagem nao selecionada")
            return;
        }
        const IsSucess = await RegisterProduct({
            name: Inputs.nome,
            price: Inputs.preco,
            description: Inputs.descricao,
            banner: Inputs.imageUrl,
            category_id: Inputs.categoria,
            imageAvatar: Inputs.imageAvatar
        });
        if (IsSucess) {
            setInputs({
                ...Inputs,
                nome: "",
                preco: "",
                descricao: "",
                imageUrl: "",
                categoria: '',
                imageAvatar: null
            })
        }
    }
    return (
        <div className={styles.containerCadastrar}>
            <h1>Novo Produto</h1>
            <form className={styles.form} onSubmit={handleSubmit}>

                <label className={styles.labelAvatar}>
                    <span>
                        <FiUpload size={30} color="#FFF" />
                    </span>
                    <input type="file" name='inputFile' accept="image/png, image/jpeg" onChange={handleFile} />
                    {
                        Inputs.imageUrl &&
                        <img
                            className={styles.preview}
                            src={Inputs.imageUrl}
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
