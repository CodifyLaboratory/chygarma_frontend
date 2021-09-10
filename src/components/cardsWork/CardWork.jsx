import css from "./cardwork.module.css"
import CardImg from "../../assets/img/cardWork.png"

export const CardWork = (props) => {
    return (
        <div style={{background: props.bg}} className={css.card}>
            <div className={css.img}>
                <img src={CardImg} alt=""/>
            </div>
            <h1>
                Название произведения
            </h1>
            <p>Автор</p>
            <p>Жанр</p>
            <p>Дата</p>
        </div>
    )
}