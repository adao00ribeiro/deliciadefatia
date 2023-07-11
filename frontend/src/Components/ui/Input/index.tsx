import { IInputProps } from "../../../interfaces/IInputProps"
import styles from './styles.module.scss'
export default ({ ...props }: IInputProps) => {
    return (
        <input className={styles.input}  {...props} />
    )
}