import './cardStyles.css';
import Button, { ButtonProps } from './../buttonComponent/Button';


export interface CardProps {
    note: string;
    priority: string;
    time: string;
    buttonCount: 1 | 2;
    id: number;
}

const Card = (props: CardProps) => {
    // Button Properties and other such things
    let priority = "priority " + props.priority; // Can be 3, high, medium, low. Check  styles file to understand. Fallback color is brown.
    let buttonProperties = {
        b1: {
            name: "Done",
            onClickCallback: () => {  },
            style: "green"
        },
        b2: {
            name: "Remove",
            onClickCallback: () => { },
            style: "red"
        }
    }

    return (
        <div className="custom-card">
            <div className="info">
                <div className="note">
                    <p>{props.note}</p>
                </div>
                {/*Below is the div for buttons, do not add more code in the buttonsDiv */}
                <div className="buttonsDiv">
                    {
                        props.buttonCount === 2
                            ?
                            <>
                                <Button name={buttonProperties.b1.name} onClickCallback={buttonProperties.b1.onClickCallback} style={buttonProperties.b1.style}
                                ></Button>
                                <Button name={buttonProperties.b2 ? buttonProperties.b2.name : ""}
                                    onClickCallback={buttonProperties.b2 ? buttonProperties.b2.onClickCallback : () => { }}
                                    style={buttonProperties.b2 ? buttonProperties.b2.style : ""}
                                ></Button>
                            </>
                            :
                            <>
                                <Button name={buttonProperties.b2 ? buttonProperties.b2.name : ""}
                                    onClickCallback={buttonProperties.b2 ? buttonProperties.b2.onClickCallback : () => { }}
                                    style={buttonProperties.b2 ? buttonProperties.b2.style : ""}
                                ></Button>
                            </>
                    }
                </div>
            </div>

            <div className={priority}>
                <p>{props.time}</p>
            </div>

        </div>
    )
};

export default Card;