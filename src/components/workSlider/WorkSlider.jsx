import css from "../../pages/authors/authors.module.css"
import React, {Component} from "react";
import Slider from "react-slick";
import {BoxWork} from "../boxWork/BoxWork"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={css.slickPrev}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

export default class WorkSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className={css.slickSlider}>
                <Slider {...settings}>
                    <div className={css.slider}>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                    </div>
                    <div className={css.slider}>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                    </div>
                    <div className={css.slider}>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                    </div>
                    <div className={css.slider}>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                    </div>
                    <div className={css.slider}>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                    </div>
                    <div className={css.slider}>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                        <BoxWork mxwidth={"930px"} width={"100%"}/>
                    </div>
                </Slider>
            </div>
        );
    }
}