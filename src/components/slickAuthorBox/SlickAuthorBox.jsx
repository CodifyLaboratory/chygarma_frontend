import css from "./slickAuthorBox.module.css"

export const SlickAuthorBox = () => {
    return (
        <div className={css.box}>
            <div className={css.avatar}>
                <img src="" alt=""/>
            </div>
            <div className={css.text}>
                <p className={css.name}>Саякбай
                    каралаев</p>
                <p className={css.description}>лирика, трагедия, стихи
                    на платформе с 02.07.2021</p>
            </div>

        </div>
    )
}