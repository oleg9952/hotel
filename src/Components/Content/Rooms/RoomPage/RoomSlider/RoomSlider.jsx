import React from 'react'
import Slider from 'react-slick'
import data from '../../../../../mock/rooms.json'
import './RoomSlider.css'

const RoomSlider = () => {
    const settings = {
        customPaging: function(i) {
            return (
                <div 
                    className="slide_thumb"
                    style={{
                        backgroundImage: `url(${data[0].imgBaseUrl}${i + 1}.jpg)`
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
                data[0].img.map(item => (
                    <div className="slide" key={item.length}>
                        <div className="slide_img"
                            style={{
                                backgroundImage: `url(${item})`
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
