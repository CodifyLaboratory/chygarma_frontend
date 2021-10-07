import css from "../../pages/main/main.module.css";
import OimoImg from "../../assets/img/oimo.png"
import {Link} from "react-router-dom";

export const Oimo = (props) => {
    return (
        <div>
            <div className={css.cardLeft}>
                <div className={css.cardImg}>
                    <img src={OimoImg} alt=""/>
                </div>
                <Link to={props.link}>
                    <p className={css.link}>{props.text}</p>
                </Link>
                <div className={css.cardImg}>
                    <img src={OimoImg} alt=""/>
                </div>
            </div>
        </div>
    );
}
