import './formStyles.css';
import Button, { ButtonProps } from './../buttonComponent/Button';

export interface formProps {
    onSubmitCallback: (task: string, priority: string) => void;
}

const Form = (props: formProps) => {
    let priority = "";
    const checkboxHandler = (target: HTMLInputElement) => {
        //The code below makes sure you can check only one checkbox at a time.
        if (target.value == priority) {
            priority = "";
        } else {
            priority = target.value;
            let checkboxes = document.querySelector(".options")?.querySelectorAll("input");
            checkboxes?.forEach((checkbox) => {
                if (checkbox.value !== priority) {
                    checkbox.checked = false;
                }
            })
        }
    }

    //Button properties
    let buttonProps: ButtonProps = {
        name: "Add Todo",
        style: "blue",
        onClickCallback: () => {
            //Check if the user has entered both a task and a priority, otherwise alert!
            let task = (document.getElementById("taskInput") as HTMLInputElement).value;
            if (task !== "" && priority !== "") {
                props.onSubmitCallback(task, priority);
                let checkboxes = document.querySelector(".options")?.querySelectorAll("input");
                checkboxes?.forEach((checkbox) => checkbox.checked = false);
                (document.getElementById("taskInput") as HTMLInputElement).value = "";
            } else {
                alert("Please Add a note and check a checkbox!");
            }
        }
    }

    return (
        <div className="custom-form">
            <div className="inputs">
                <div className="editor">
                    <textarea id="taskInput" className="input" maxLength={65} placeholder="Enter Todo here" />
                </div>
                {/*Below is the div for buttons, do not add more code in the buttonsDiv */}
                <div className="buttonsDiv">
                    <>
                        <Button name={buttonProps.name}
                            onClickCallback={buttonProps.onClickCallback}
                            style={buttonProps.style}
                        ></Button>
                    </>
                </div>
            </div>

            <fieldset id="check" className="checkboxes">
                <legend>Priority</legend>
                <div className="options">
                    <label className="checkbox">
                        <input onClick={(e) => checkboxHandler(e.currentTarget)} value="high" id="high" type="checkbox" />
                        <span>H</span>
                    </label>
                    <label className="checkbox">
                        <input onClick={(e) => checkboxHandler(e.currentTarget)} value="medium" id="medium" type="checkbox" />
                        <span>M</span>
                    </label>
                    <label className="checkbox">
                        <input onClick={(e) => checkboxHandler(e.currentTarget)} value="low" id="low" type="checkbox" />
                        <span>L</span>
                    </label>
                </div>
            </fieldset>

        </div>
    )
}

export default Form;