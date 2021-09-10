import css from "../../pages/main/main.module.css";
import OimoImg from "../../assets/img/oimo.png"

export const Oimo = () => {
    return (
        <div>
            <div className={css.cardLeft}>
                <div className={css.cardImg}>
                    <img src={OimoImg} alt=""/>
                </div>
                <p className={css.link}>Все произведения</p>
                <div className={css.cardImg}>
                    <img src={OimoImg} alt=""/>
                </div>
            </div>
        </div>
    );
}
