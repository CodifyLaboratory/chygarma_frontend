import css from "./footer.module.css"
import TwitterIcon from "../../assets/img/twitter.png"
import YouTubeIcon from "../../assets/img/youtube.png"
import InstIcon from "../../assets/img/instagram.png"

export const Footer = () => {
    return (
        <div className={css.footer}>
            <div className="container">
                <div className={css.topFooter}>
                    <ul className={css.links}>
                        <li>Авторы</li>
                        <li>Популярные авторы</li>
                        <li>Все авторы</li>
                        <li>Стать автором</li>
                    </ul>
                    <ul className={css.links}>
                        <li>Произведения</li>
                        <li>Популярные произведения</li>
                        <li>Все произведения</li>
                        <li>Поделиться произведением</li>
                    </ul>
                    <ul className={css.links}>
                        <li>Новости</li>
                        <li>Статистика</li>
                        <li>Выбор редакции</li>
                        <li>История кыргызкой литературы</li>
                    </ul>
                    <ul className={css.links}>
                        <li>О нас</li>
                        <li>Войти</li>
                        <li>Зарегистрироваться</li>
                    </ul>
                </div>
                <div className={css.bottomFooter}>
                    <p>Политика конфиденциальности</p>
                    <div className={css.soc}>
                        <p>Социальные сети</p>
                        <div className={css.socIcon}>
                            <div>
                                <img src={TwitterIcon} alt=""/>
                            </div>
                            <div>
                                <img src={YouTubeIcon} alt=""/>
                            </div>
                            <div>
                                <img src={InstIcon} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}