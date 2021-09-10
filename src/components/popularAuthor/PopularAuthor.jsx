import css from "./popularauthor.module.css"

export const PopularAuthor = (props) => {
    return (
        <div>
            <div style={{background: props.bg}} className={css.cardAuth}>
            <div className={css.circle}></div>
            <span>Ч Айтматов</span>
            <p>Количество читателей</p>
            <p>Комментариев</p>
            <p>Жанры</p>
            </div>
            <div style={{background: props.brBg}} className={css.btnLink}>Смотреть профиль</div>
        </div>
    )
}
