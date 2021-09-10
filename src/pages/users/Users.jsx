import css from "./users.module.css"
import {Search} from "../../components/search/Search";
import {BoxWork} from "../../components/boxWork/BoxWork";

export const Users = () => {
    return (
        <div className="container2">
            <div className={css.users}>
                <div className="container">
                    <p className={css.name}>саякбай каралаев</p>
                    <div className={css.avatarUSer}>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
            <div className={css.staticContent}>
                <div className="container">
                    <div className={css.statics}>
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
                        <button>Читать</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <section className={css.worksUser}>
                    <h1>Произведения</h1>
                    <Search />
                    <div className={css.box}>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                    </div>

                </section>
            </div>
        </div>
    )
}