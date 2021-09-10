import css from "./historybox.module.css"
import OimoImg from "../../assets/img/oimo.png"

export const HistoryBox = (props) => {
    return (
        <div style={{flexDirection: props.row}} className={css.box}>
            <div className={css.leftBox}>
                <p>{props.text}</p>
            </div>
            <div className={css.rightBox}>
                <div>
                    <img src={OimoImg} alt=""/>
                </div>
            </div>
        </div>
    )
}