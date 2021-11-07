import css from "./authors.module.css"
import BgAuth from "../../assets/img/AuthorsBg.png"
import {SlickAuthorBox} from "../../components/slickAuthorBox/SlickAuthorBox";
import {Search} from "../../components/search/Search";
import WorksSlider from "../../components/worksSlider/WorksSlider"
export const Authors = () => {
        return (
            <div>
                <div className="container2">
                    <div className={css.bg}>
                        <img src={BgAuth} alt=""/>
                        <h1>Авторы</h1>
                    </div>
                    <div className="container">
                        <section className={css.authors}>
                            <h2 className={css.title}>Популярные авторы</h2>
                            <div className={css.slick}>
                                <div className={css.slickLeft}>
                                    <SlickAuthorBox/>
                                    <SlickAuthorBox/>
                                    <SlickAuthorBox/>
                                    <SlickAuthorBox/>
                                    <SlickAuthorBox/>
                                    <SlickAuthorBox/>
                                </div>
                                <div className={css.slickRight}>
                                    <p className={css.slickLink}>Все авторы</p>
                                    <p className={css.slickLink}>Стать автором</p>
                                </div>
                            </div>
                        </section>
                        <section className={css.allAuthors}>
                            <h2>Все авторы</h2>
                            <div>
                                <Search/>
                            </div>
                                <div className={css.boxAuthors}>
                                    <WorksSlider />
                                </div>
                        </section>
                    </div>
                </div>
            </div>

        )
    }