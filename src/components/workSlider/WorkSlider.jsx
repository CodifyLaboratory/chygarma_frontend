import React, {Component} from "react";
import Slider from "react-slick";
import {BoxWork} from "../boxWork/BoxWork"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../assets/img/next.png"

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="nextArrow arrow">
            <img className="arrowImg" src={Arrow} alt=""/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="prevArrow arrow">
            <img className="arrowImg" src={Arrow} alt=""/>
        </div>
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
            <div className="slickSlider">
                <Slider {...settings}>
                    <div className="slider">
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                    </div>
                    <div className="slider">
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                        <BoxWork mxwidth={"850px"} width={"100%"}/>
                    </div>
                </Slider>
            </div>
        );
    }
}