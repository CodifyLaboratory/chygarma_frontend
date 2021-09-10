import css from "./input.module.css"

export const Input = (props) => {
    return (
        <div>
            <input className={css.input} placeholder={props.plaсeholder} type="text"/>
        </div>
    )
}