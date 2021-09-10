import css from "./newsbox.module.css"

export const NewsBox = (props) => {
    return (
        <div style={{flexDirection: props.row, textAlign: props.right}} className={css.box}>
            <div className={css.boxLeft}>
                <div>Иллюстрации новостей</div>
            </div>
            <div className={css.boxRight}>
                <h6>Заголовок</h6>
                <p>
                    Я больше не могу писать,
                    Я не испытываю боли,
                    В моей теперешней юдоли
                    Любить – совсем не есть страдать…
                    Но значит жить, но значит ждать,
                    Но значит чувствовать и верить,
                    И каждый день стоять у двери,
                    Ценить мгновения и время,
                    Касаться, гладить, обнимать…

                    Я потерял тот черный сплин,
                    Что дарит траурная муза,
                    Крестом на спину, тяжким грузом,
                    За дар «писать» лишая сил...

                </p>
            </div>
        </div>
    )
}
