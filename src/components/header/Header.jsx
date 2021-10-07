import css from "./header.module.css"
import Logo from "../../assets/img/logo.png"
import {Link} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header}>
                    <Link className="link" to="/">
                        <div className={css.headerLogo}>
                            <img src={Logo} alt=""/>
                        </div>
                    </Link>
                    <Link className="link" to="/">
                        <p className={css.headerLink}>Главная</p>
                    </Link>
                    <Link className="link" to="/authors">
                        <p className={css.headerLink}>Авторы</p>
                    </Link>
                    <Link className="link" to="/authors-works">
                        <p className={css.headerLink}>Произведения</p>
                    </Link>
                    <a className="link" href="/main#news">
                        <p className={css.headerLink}>Новости</p>
                    </a>

                    <div className={css.btns}>
                        {
                            props.isAuth ? <>
                                    <Link className="link" to="/authorization">
                                        <button className={css.borderBtn}>Вход ></button>
                                    </Link>
                                    <Link className="link" to="/registration">
                                        <button className={css.bgBtn}>Регистрация ></button>
                                    </Link>
                                </>
                                :
                                <>
                                    <div className={css.authName}>
                                        <Link className="link" to="/dashboard">
                                            <p className={css.name}>Имя фамилия</p>
                                        </Link>
                                        <Link className="link" to="/dashboard">
                                            <div className={css.avatarImg}>
                                                <img src="" alt=""/>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                        }
                    </div>
                    <div onClick={() => props.setModal(!props.modal)} className={css.burgerMenu}>
                        <div className={css.burgerLine}></div>
                        <div className={css.burgerLine}></div>
                        <div className={css.burgerLine}></div>
                    </div>
                    {
                        props.modal && <div className={css.modal}>
                            {
                                props.isAuth ? <>
                                    <Link className="link" to="/authorization">
                                        <button className={css.borderBtn}>Вход ></button>
                                    </Link>
                                    <Link className="link" to="/registration">
                                        <button className={css.bgBtn}>Регистрация ></button>
                                    </Link>
                                </> :
                                    <>
                                        <div className={`${css.adwad} ${css.authName}`}>
                                            <Link className="link" to="/dashboard">
                                                <p className={css.name}>Имя фамилия</p>
                                            </Link>
                                            <Link className="link" to="/dashboard">
                                                <div className={css.avatarImg}>
                                                    <img src="" alt=""/>
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                            }
                            <Link className="link" to="/">
                                <p>Главная</p>
                            </Link>
                            <Link className="link" to="/authors">
                                <p>Авторы</p>
                            </Link>
                            <Link className="link" to="/authors-works">
                                <p>Произведения</p>
                            </Link>
                            <a className="link" href="/main#news">
                                <p>Новости</p>
                            </a>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}