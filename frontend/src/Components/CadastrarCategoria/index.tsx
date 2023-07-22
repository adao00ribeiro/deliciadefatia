import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import styles from "./styles.module.scss";
import RegisterCategory from "../../services/funcoes/RegisterCategory";


export function CadastrarCategoria() {
    const [InputCategoria,setInputCategoria] = useState('');

    const handleInput = useCallback(function (event : ChangeEvent<HTMLInputElement>) {
     const {value} = event.target;
     setInputCategoria(value);
    },[setInputCategoria])

    const handleSubmit=  useCallback( function (event: FormEvent) {
        event.preventDefault();
          RegisterCategory(InputCategoria);
       },[InputCategoria])
    return (
        <div className={styles.containerCategoria}>
            <h1>Nova Categoria</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input 
                value={InputCategoria} 
                onChange={handleInput}
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Digite o nome para a categoria" 
                required 
                />
                <Button type="submit" >Cadastrar</Button>
            </form>
        </div>
    )
}