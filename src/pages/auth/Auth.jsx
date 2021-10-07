import css from "./auth.module.css"
import {Input} from "../../components/input/Input";
import {Link} from "react-router-dom";

export const Auth = () => {
    return (
        <div className="container2">
            <div className={css.bg}>
                <div className="container">
                    <div className={css.auth}>
                        <h1>Войти в аккаунт</h1>
                        <Input plaсeholder={"Логин"}/>
                        <Input plaсeholder={"Пороль"}/>
                        <p>Забыли пароль?<span> Восстановление пароля</span></p>
                        <button>Войти</button>
                        <p>Нету аккаунта?
                            <Link className="link" to="/registration">
                            <span className={css.link}>
                              Зарегистрироваться
                        </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}