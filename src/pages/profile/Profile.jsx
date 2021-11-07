import css from "./profile.module.css"
import {Search} from "../../components/search/Search";
import WorksSlider from "../../components/worksSlider/WorksSlider";
import {useState} from "react";

export const Profile = () => {
    const [file, setFile] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [workUpload, setWorkUpload] = useState(null)

    const fileChange = (e) => {
        if(e.target.files !== null && e.target.files.length){
            console.log(e.target.files)
            const file = e.target.files[0];
            const reader = new FileReader();
            reader?.readAsDataURL(file);
            reader.onload = (e) => {
                const newUrl= e.target.result;
                console.log(newUrl)
                setFile(newUrl)
            }
        }
    }
    const avatarChange = (e) => {
        if(e.target.files !== null && e.target.files.length){
            console.log(e.target.files)
            const file = e.target.files[0];
            const reader = new FileReader();
            reader?.readAsDataURL(file);
            reader.onload = (e) => {
                const newUrl= e.target.result;
                console.log(newUrl)
                setAvatar(newUrl)
            }
        }
    }
    const workImgUpload = (e) => {
        if(e.target.files !== null && e.target.files.length){
            console.log(e.target.files)
            const file = e.target.files[0];
            const reader = new FileReader();
            reader?.readAsDataURL(file);
            reader.onload = (e) => {
                const newUrl= e.target.result;
                console.log(newUrl)
                setWorkUpload(newUrl)
            }
        }
    }

    return (
        <div>
            <div className={css.bg}>
                <img className={css.bgAvatar} src={file} alt=""/>
                <div className="container">
                    <div className={css.aboutAuth}>
                        <div className={css.file}>
                            <p>Загрузите фоновое изображение</p>
                            <label onChange={fileChange} for="fileAvatar">
                                <input id="fileAvatar" type="file"/>
                                Выбрать
                            </label>
                        </div>
                        <div className={`${css.file} ${css.fileModal}`}>
                            <label htmlFor="fileAvatar">
                                <input id="fileAvatar" type="file"/>
                                +
                            </label>
                        </div>
                        <p>Саякбай каралаев</p>
                        <div className={css.avatarImg}>
                            <img src={avatar} alt=""/>
                            <div className={css.avatarUploud}>
                                <label onChange={avatarChange} htmlFor="avatarChange">
                                    <input id="avatarChange" type="file"/>
                                    +
                                </label>
                            </div>
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
                        <WorksSlider/>
                    </div>
                </section>
                <section className={css.creates}>
                    <h2>Опубликовать произведение</h2>
                    <div className={css.create}>
                        <div className={css.mainBox}>
                            <p className={css.category}>Произведение</p>
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
                                    <img src={workUpload} alt=""/>
                                    <div className={`${css.avatarUploud} ${css.workUploud}`}>
                                        <label onChange={workImgUpload} htmlFor="workImgUpload">
                                            <input id="workImgUpload" type="file"/>
                                            +
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={css.endBox}>
                            <div className={css.topEndBox}>
                                <p className={css.categoty}>Описание</p>
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