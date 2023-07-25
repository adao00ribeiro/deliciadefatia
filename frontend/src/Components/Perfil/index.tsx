import { ChangeEvent, useState } from "react";
import useUser from "../../Store/useUser";
import Button from "../ui/Button";
import Input from "../ui/Input";
import styles from "./styles.module.scss";

export default () => {
    const user = useUser(state => state.user)
    const [inputUser, setinputUser] = useState({
        name: user.name,
        email: user.email,
        jobtitle: user.jobtitle,
        password: user.password,
        password2: "",
        imageUrl: "",
        imageAvatar: null
    });
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setinputUser({ ...inputUser, [name]: value });
    }
    const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }

        const image = event.target.files[0];
        if (!image) {
            return;
        }
        if (image.type === 'image/jpeg' || image.type === 'image/png') {

            setinputUser({
                ...inputUser,
                imageUrl: URL.createObjectURL(event.target.files[0]),
                imageAvatar: image
            })
        }
    }
    return (
        <div className={styles.perfil}>
            <h1>Perfil</h1>
            <form className={styles.form} >

                <label className={styles.labelAvatar}>

                    <input type="file" name='inputFile' accept="image/png, image/jpeg" onChange={handleFile} />

                    <img
                        className={styles.preview}
                        src={inputUser.imageUrl == "" ? "/avatarui.png" : inputUser.imageUrl}
                        alt="Foto do produto"
                        width={250}
                        height={250}
                    />


                </label>
                <Input
                    name="name"
                    type="text"
                    value={inputUser.name}
                    placeholder="name"
                    onChange={handleInput}
                />
                <Input
                    name="email"
                    type="email"
                    value={inputUser.email}
                    placeholder="email"
                    onChange={handleInput}
                />
                <Input
                    name="jobtitle"
                    type="text"
                    value={inputUser.jobtitle}
                    placeholder="job" disabled
                    onChange={handleInput}
                />
                <Input
                    name="password"
                    type="password"
                    value={inputUser.password}
                    placeholder="senha"
                    onChange={handleInput}
                />
                <Input
                    name="password2"
                    type="password"
                    value={inputUser.password2}
                    placeholder="senha"
                    onChange={handleInput}
                />
                <Button>Atualizar</Button>
            </form>
        </div>
    )
}