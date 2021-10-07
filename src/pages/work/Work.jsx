import css from "./work.module.css"

export const Work = () => {
    return (
        <div className="container">
            <div className={css.work}>
                <div className={css.leftWork}>
                    <h1>Манас</h1>
                    <div className={css.pre}>
                    <pre>
                        ЖЕРНОВА.
                        Когда была совсем мала,
                        И ноги  бегали  по грязи,
                    </pre>
                    </div>
                </div>
                <div className={css.rightWork}>
                    <div>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}