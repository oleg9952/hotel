import React, { Component } from 'react'
import Slider from 'react-slick'

class FeedBack extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }
    
    render() {
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnHover: false,
            swipe: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }

        return (
            <div className="feedback">
                <h2 className="feedback_title">Customer's feedback</h2>
                <div className="content">
                    <Slider 
                        ref={c => (this.slider = c)}
                        {...settings}
                        className="feedback_slider"
                    >
                        <div className="feedback_card">
                            <div className="card">
                                <div className="card_img"></div>
                                <p className="feedback_message">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos a quisquam nam. Dignissimos dolorem qui velit aut non?
                                </p>
                                <div className="customer_details">
                                    <p className="customer_name">Alex Brand</p>
                                    <p className="feedback_date">10.12.2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback_card">
                            <div className="card">
                                <div className="card_img"></div>
                                <p className="feedback_message">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos a quisquam nam. Dignissimos dolorem qui velit aut non?
                                </p>
                                <div className="customer_details">
                                    <p className="customer_name">Alex Brand</p>
                                    <p className="feedback_date">10.12.2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback_card">
                            <div className="card">
                                <div className="card_img"></div>
                                <p className="feedback_message">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos a quisquam nam. Dignissimos dolorem qui velit aut non?
                                </p>
                                <div className="customer_details">
                                    <p className="customer_name">Alex Brand</p>
                                    <p className="feedback_date">10.12.2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback_card">
                            <div className="card">
                                <div className="card_img"></div>
                                <p className="feedback_message">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos a quisquam nam. Dignissimos dolorem qui velit aut non?
                                </p>
                                <div className="customer_details">
                                    <p className="customer_name">Alex Brand</p>
                                    <p className="feedback_date">10.12.2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback_card">
                            <div className="card">
                                <div className="card_img"></div>
                                <p className="feedback_message">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos a quisquam nam. Dignissimos dolorem qui velit aut non?
                                </p>
                                <div className="customer_details">
                                    <p className="customer_name">Alex Brand</p>
                                    <p className="feedback_date">10.12.2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="feedback_card">
                            <div className="card">
                                <div className="card_img"></div>
                                <p className="feedback_message">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos a quisquam nam. Dignissimos dolorem qui velit aut non?
                                </p>
                                <div className="customer_details">
                                    <p className="customer_name">Alex Brand</p>
                                    <p className="feedback_date">10.12.2019</p>
                                </div>
                            </div>
                        </div>
                        
                    </Slider>
                    <div className="slider_arrows">
                        <div className="slider_arrow" onClick={this.previous}>
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        <div className="slider_arrow" onClick={this.next}>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default FeedBack
