import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import Spinner from '../../Spinner/Spinner'

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

    formatDate(date) {
        let d = new Date(date)
        let day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
        let month = (d.getMonth() + 1) < 10 ? `0${(d.getMonth() + 1)}` : (d.getMonth() + 1)
        let year = d.getFullYear()
        return `${day}.${month}.${year}`
    }

    recentReviews() {
        let recent = null
        if(this.props.reviews !== null) {
            recent = this.props.reviews.slice(0, 6)
        }
        return recent
    }

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
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
                    {
                        this.recentReviews() !== null ? (
                            <Slider 
                                ref={c => (this.slider = c)}
                                {...settings}
                                className="feedback_slider"
                            >
                                { this.recentReviews().map(review => (
                                    <div className="feedback_card" key={review.id}>
                                        <div className="card">
                                            <div className="card_img"
                                                style={{ backgroundImage: `url(${review.profileImg})` }}
                                            >
                                                {
                                                    !review.profileImg ? review.name.charAt(0) : ''
                                                }
                                            </div>
                                            <p className="feedback_message">
                                                { review.message }
                                            </p>
                                            <div className="customer_details">
                                                <p className="customer_name">
                                                    { review.name }
                                                </p>
                                                <p className="feedback_date">
                                                    { this.formatDate(review.date) }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )) }
                            </Slider>
                        ) : <Spinner />
                        
                    }
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

function mapStateToProps(state) {
    return {
        reviews: state.reviewReducers.reviews
    }
}

export default connect(mapStateToProps)(FeedBack)
