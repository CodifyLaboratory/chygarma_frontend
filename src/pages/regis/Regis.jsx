import css from "../auth/auth.module.css"
import {Input} from "../../components/input/Input";
import {Link} from "react-router-dom";

export const Regis = () => {
    return (
        <div>
            <div className="container2">
                <div className={css.bg}>
                    <div className="container">
                        <div className={css.auth}>
                            <h1>Зарегистрироваться</h1>
                            <Input plaсeholder={"Имя Фамилия"}/>
                            <Input plaсeholder={"E-mail"}/>
                            <Input plaсeholder={"Логин"}/>
                            <Input plaсeholder={"Пороль"}/>
                            <ul>
                                <li>Должен состоять макс. 8 знаков</li>
                            </ul>
                            <button>Зарегистрироваться</button>
                            <p>Уже есть аккаунт?
                                <Link className="link" to="/authorization">
                                    <span className={css.link}>Войти</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}