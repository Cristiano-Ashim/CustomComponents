import './buttonStyles.css';

export interface ButtonProps {
    onClickCallback: () => void;
    name: string;
    style?: string; //Can be 'red','green',or 'blue' -> Check styling file. Also has default color if prop is not provided.
}

const Button = (props: ButtonProps) => {

    let onClickHandler = () => {
        props.onClickCallback();
    }

    let className = "button " + props.style;
    return (
        <>
            <button className={className}
                onClick={onClickHandler}
            >
                {props.name}
            </button>
        </>
    )
}

export default Button;