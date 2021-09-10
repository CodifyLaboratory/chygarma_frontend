import css from "./staticbox.module.css"

export const StaticBox = (props) => {
    return (
        <div style={{textAlign: props.right, marginLeft: props.margin}} className={css.boxStatic}>
            <p className={css.staticP}>{props.text}</p>
            <p className={css.number}>23234</p>
        </div>
    )
}
