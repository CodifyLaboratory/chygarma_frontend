import css from "./boxWork.module.css"

export const BoxWork = (props) => {
    return (
        <div style={{ width: props.mxwidth, maxWidth: props.width}} className={css.box}>
            <h2 className={css.boxName}>Название произведения</h2>
            <div className={css.boxDes}>
                <p className={css.boxCategory}>Жанр и дата публикации</p>
                <p className={css.boxDate}>автор</p>
            </div>
        </div>
    )
}
