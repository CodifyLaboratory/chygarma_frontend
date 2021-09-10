import css from "./profile.module.css"
import {Search} from "../../components/search/Search";
import WorkSlider from "../../components/workSlider/WorkSlider";

export const Profile = () => {
    return (
        <div>
            <div className={css.bg}>
                <div className="container">
                    <div className={css.aboutAuth}>
                        <div className={css.file}>
                            <p>Загрузите фоновое изображение</p>
                            <label for="fileAvatar">
                                <input id="fileAvatar" type="file"/>
                                Выбрать
                            </label>
                        </div>
                        <p>Саякбай каралаев</p>
                        <div className={css.avatarImg}>
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
                <section className={css.quantity}>
                    <div>
                        <p className={css.text}>Произведения</p>
                        <p className={css.number}>274</p>
                    </div>
                    <div>
                        <p className={css.text}>лайки</p>
                        <p className={css.number}>81 562</p>
                    </div>
                    <div>
                        <p className={css.text}>читатели</p>
                        <p className={css.number}>427 895</p>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className={css.myWork}>
                    <h1>мои произведения</h1>
                    <Search/>
                    <div>
                        <WorkSlider/>
                    </div>
                </section>
                <section className={css.creates}>
                    <h2>Опубликовать произведение</h2>
                    <div className={css.create}>
                        <div className={css.mainBox}>
                            <p className={css.categoty}>Произведение</p>
                            <textarea className={css.mainTextarea} />
                        </div>
                        <div className={css.centerBox}>
                            <div className={css.topCenterBox}>
                                <p className={css.categoty}>Название</p>
                                <textarea></textarea>
                            </div>
                            <div className={css.bottomCenterBox}>
                                <p className={css.categoty}>ИЛЛЮСТРАЦИЯ</p>
                                <div className={css.photoUploud}>
                                    <img src="" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={css.endBox}>
                            <div className={css.topEndBox}>
                                <p className={css.categoty}>ОПисание</p>
                                <textarea></textarea>
                            </div>
                            <div className={css.bottomEndBox}>
                                <p className={css.categoty}>Хештеги</p>
                                <textarea></textarea>
                                <p className={css.categoty}>Жанр</p>
                                <select>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                                <button>Опубликовать</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}