import css from "./works.module.css"
import WorksBg from "../../assets/img/WorksBg.png"
import {WorksBox} from "../../components/worksBox/WorksBox";
import {Search} from "../../components/search/Search";
import WorkSlider from "../../components/workSlider/WorkSlider";

export const Works = () => {
    return (
        <div className="container2">
            <div className={css.WorksBg}>
                <img src={WorksBg} alt=""/>
                <h1>Произведения</h1>
            </div>
            <div className="container">
                <section className={css.popularWorks}>
                    <h2>Популярные произведения</h2>
                    <div className={css.worksBox}>
                        <WorksBox/>
                        <WorksBox/>
                        <WorksBox/>
                        <WorksBox/>
                        <WorksBox/>
                        <WorksBox/>
                        <WorksBox/>
                        <WorksBox/>
                    </div>
                </section>
                <section className={css.allWorks}>
                    <h3>Все произведения</h3>
                    <Search/>
                    <div className={css.allWorksBox}>
                        <WorkSlider/>
                    </div>

                </section>
            </div>
        </div>
    )
}