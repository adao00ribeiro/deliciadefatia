import { IButtonProps } from "../../../interfaces/IButtonProps"

export default (props: IButtonProps) => {
    return (
        <button
            {...props}
        >
            {props.children}
        </button>
    )
}