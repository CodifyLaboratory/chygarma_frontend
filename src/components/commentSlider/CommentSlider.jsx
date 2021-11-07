import React, {Component} from "react";
import Slider from "react-slick";
import css from "./commentSlider.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "../../assets/img/next.png"
import CommentBox from "../commentBox/commentBox";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className={css.next + "comm_arrow_next"}>
            <img className={css.arrow} src={Arrow} alt=""/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="prevArrow arrow comm_arrow_prev">
            <img className="arrowImg" src={Arrow} alt=""/>
        </div>
    );
}

export default class CommmentSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div className="slickSlider">
                <Slider {...settings}>
                    <div className={css.slider}>
                        <CommentBox/>

                    </div>
                    <div className={css.slider}>
                        <CommentBox/>
                    </div><div className={css.slider}>
                        <CommentBox/>

                    </div>
                    <div className={css.slider}>
                        <CommentBox/>
                    </div><div className={css.slider}>
                        <CommentBox/>

                    </div>
                    <div className={css.slider}>
                        <CommentBox/>
                    </div><div className={css.slider}>
                        <CommentBox/>

                    </div>
                    <div className={css.slider}>
                        <CommentBox/>
                    </div><div className={css.slider}>
                        <CommentBox/>

                    </div>
                    <div className={css.slider}>
                        <CommentBox/>
                    </div><div className={css.slider}>
                        <CommentBox/>

                    </div>
                    <div className={css.slider}>
                        <CommentBox/>
                    </div>
                </Slider>
            </div>
        );
    }
}