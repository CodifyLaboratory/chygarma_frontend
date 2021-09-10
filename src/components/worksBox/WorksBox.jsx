import css from "./worksBox.module.css"

export const WorksBox = () => {
    return (
        <div className={css.box}>
            <img src="" alt=""/>
            <p className={css.name}>Название произведения</p>
            <p className={css.date}>Жанр и дата публикации</p>
            <p className={css.avatar}>Иллюстрация на фоне
                затемненная</p>
            <p className={css.authText}>Автор</p>
        </div>
    )
}