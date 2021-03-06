import css from "./work.module.css"
import Like from "../../assets/img/Vector.svg"
import CommentSlider from "../../components/commentSlider/CommentSlider";


export const Work = () => {
    return (
        <div className="container">
            <div className={css.work}>
                <div className={css.leftWork}>
                    <h1 className={css.title}>Название произведения</h1>
                    <h2 className={css.author}>Автор</h2>
                    <div className={css.pre}>
                    <pre className={css.poem}>
                    ЖЕРНОВА.
                    Когда была совсем мала,
                    И ноги  бегали  по грязи,
                    В деревне я тогда жила,
                     Рубашка- рядно*, не из бязи.

                    Коней забрали на войну,
                     А молодняк ещё не вырос.
                    Я вспоминаю – не виню,
                    И спит пока моя сатира.

                    Пахали бабы на быках,
                    Упрямей  бык любой ослицы.
                    Мотнёт  башкой, а плуг в руках…
                    Ослабли женские  десницы*.

                    Купила мама жернова,
                    За ними в город ехать надо.
                    Каких -то  два больших круга,
                    Мука своя -  и  в доме радость.

                    Ещё темно. Печной дымок
                    Над чьей- то крышей  чуть витает,
                    Быка в упряжку, путь далёк,
                    Когда же ждать? А мать вздыхает.

                    И день к концу,  а мамы  нет.
                    Смотрю  с надеждой на дорогу,
                    Но стало быстренько темнеть,
                    Гоню с души  своей тревогу.

                    Вдруг вижу пыль, то бык бредёт,
                    На облучке*  моя же мама.
                    Быстрее к ней я, через брод,
                    А бык  в глубинку… там же яма.

                    И хворостиной мать, и так,
                    А он  всё тянет глубже в воду,
                    Но я не плаваю,  никак,
                    К какому движемся исходу?

                    И мама быстро в воду… плюх,
                    По  грудки ей. Быка за морду,
                    А бык оглох ,  ослаб на слух,
                    Стоит в воде и смотрит  гордо.

                    Я  это помню и сейчас
                    Минуты,  молча,  вспоминаю.
                    В воде по пояс находясь…
                    Быка  за мать теперь  ругаю.
                    </pre>
                        <div className={css.likes}>
                            <p><img src={Like} alt=""/></p>
                            <div>10 256</div>
                        </div>
                    </div>
                </div>
                <div className={css.rightWork}>
                    <div>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
            <div className={css.comments}>
                <div className={css.my_comment}>
                    <h2 className={css.title_comment}>Комментарии</h2>
                    <form>
                        <input placeholder="Напишите коментарий" className={css.comment_input} type="text"/>
                        <button className={css.comment_btn}>Опубликовать</button>
                    </form>
                </div>
                <div className={css.other_comments}>
                    <CommentSlider/>
                </div>
            </div>
        </div>
    )
}
