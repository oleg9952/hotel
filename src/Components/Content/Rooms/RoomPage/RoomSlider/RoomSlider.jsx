import React from 'react'
import Slider from 'react-slick'
import data from '../../../../../mock/rooms.json'
import './RoomSlider.css'

const RoomSlider = (props) => {
    const { id, imgBaseUrl, img } = props.room

    const settings = {
        customPaging: function(i) {
            return (
                <div 
                    className="slide_thumb"
                    style={{
                        backgroundImage: `url(${imgBaseUrl + id}/${i + 1}.jpg)`
                    }}
                >
                </div>
            )
        },
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    
    return (
        <Slider
            className="room_slider"
            {...settings}
        >  
            {
                img.map(item => (
                    <div className="slide" key={item.length}>
                        <div className="slide_img"
                            style={{
                                backgroundImage: `url(${imgBaseUrl + id}/${item})`
                            }}
                        >
                        </div>
                    </div>
                ))
            }
        </Slider>
    )
}

export default RoomSlider
