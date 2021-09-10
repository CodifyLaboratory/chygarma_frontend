import css from "./main.module.css"
import {Chygarma} from "../../components/chygarma/Chygarma";
import MainBg from "../../assets/img/mainBg.png"
import {Search} from "../../components/search/Search";
import {BoxWork} from "../../components/boxWork/BoxWork";
import OimoImg from "../../assets/img/oimo.png"
import {CardWork} from "../../components/cardsWork/CardWork";
import {Oimo} from "../../components/oimo/Oimo";
import {PopularAuthor} from "../../components/popularAuthor/PopularAuthor";
import {StaticBox} from "../../components/staticBox/StaticBox";
import {NewsBox} from "../../components/newsBox/NewsBox";
import {HistoryBox} from "../../components/historyBox/HistoryBox";

export const Main = (props) => {
    return (
        <div className="container2">
            <div className={css.bgMain}>
                <Chygarma/>
                <img className={css.bgImg} src={MainBg} alt="Background"/>
                {
                    props.modal && <div className={css.modal}>
                        <p>Главная</p>
                        <p>Авторы</p>
                        <p>Произведения</p>
                        <p>Новости</p>
                    </div>
                }
            </div>
            <div className="container">
                <div className={css.search}>
                    <div className={css.searchLeft}>
                        <Search/>
                        <BoxWork/>
                        <BoxWork/>
                        <BoxWork/>
                        <BoxWork/>
                        <BoxWork/>
                        <BoxWork/>
                    </div>
                    <div className={css.searchRight}>
                        <div className={css.rightContent}>
                            <h2>Популярные произведения</h2>
                            <p className={css.description}>Произведения, которые
                                чаще всего оценивали и
                                писали рецензии</p>
                            <div>
                                <img src={OimoImg} alt=""/>
                            </div>
                            <p className={css.link}>Смотреть все произведения</p>
                        </div>
                    </div>
                </div>
                <div className={css.cardsWork}>
                    <h2>Выбор редакции</h2>
                    <p>Высоко оценненные работы авторов</p>
                    <div className={css.cards}>
                        <div className={css.cardLeft}>
                            <Oimo/>
                        </div>
                        <div className={css.cardRight}>
                            <CardWork/>
                            <CardWork bg={"#DDAB5F"}/>
                            <CardWork/>
                            <CardWork bg={"#DDAB5F"}/>
                            <CardWork/>
                            <CardWork bg={"#DDAB5F"}/>
                        </div>
                    </div>
                </div>
                <div className={css.popular}>
                    <h3>Популярные авторы</h3>
                    <p>Авторы набравшие наибольшее количество оценок и рецензий</p>

                    <div className={css.boxAuthor}>
                        <div className={css.box}>
                            <PopularAuthor/>
                            <PopularAuthor brBg={"#F5E2CF"} bg={"#DDAB5F"}/>
                            <PopularAuthor />
                        </div>
                        <Oimo/>
                    </div>
                </div>
                <div id={"news"} className={css.statics}>
                    <div className={css.static}>
                        <div className={css.staticLeft}>
                            <h1 className={css.title}>Статистика</h1>
                            <StaticBox text={"Количество опубликованных произведений"}/>
                            <StaticBox margin={"200px"} right={"right"} text={"Количество авторов"}/>
                            <StaticBox text={"Ежедневно публикуется"}/>
                        </div>
                        <div className={css.staticRightt}>
                            <h2 className={css.title}>Новости и события</h2>
                            <NewsBox/>
                            <NewsBox right={"right"} row={"row-reverse"}/>
                            <NewsBox/>
                        </div>
                    </div>
                    <div className={css.history}>
                        <p>История кыргызкой литературы</p>
                        <div className={css.boxHistory}>
                            <HistoryBox text={"До возникновения киргизской письменности литература киргизов развивалась в форме устного творчества. Существовала традиция устной киргизской народной поэзии, начиная от лирики и заканчивая эпосом. Из киргизских поэтических произведений известны пастушеские («Бекбекей») и любовно-лирические песни («Секетбай», «Кюйгон»), кошок (плачи), пословицы и поговорки, сказки, эпосы («Курманбек», «Кедейхан», «Кожожаш», «Сарынжи-Бокей», «Олджобай и Кишимджан», «Эр-Тештюк», «Жаныл Мырза») и другие[1]."}/>
                            <HistoryBox row={"row-reverse"} text={"Особо важное значение для киргизского народа имеет героический эпос «Манас». Его популяризации способствовали манасчи (сказители), державшие его в памяти[1]. Первые записи эпоса «Манас» и других киргизских поэм сделали в середине XIX века русский учёный-тюрколог В. В. Радлов и казахских учёный Ч. Ч. Валиханов."}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
