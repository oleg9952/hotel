import React from 'react'

const OverviewItem = () => {
    return (
        <div className="overview_item">
            <div className="item_column">
                <div className="room_img"></div>
            </div>
            <div className="item_column">
                <p className="item_title">Classic Room</p>
                <div className="room_rating">
                    <span>
                        <i className="fas fa-star"></i>
                    </span>
                    <span>
                        <i className="fas fa-star"></i>
                    </span>
                    <span>
                        <i className="fas fa-star"></i>
                    </span>
                    <span>
                        <i className="fas fa-star"></i>
                    </span>
                    <span>
                        <i className="far fa-star"></i>
                    </span>
                </div>
                <p className="overview_check">Check in: 28.12.2019</p>
                <p className="overview_check">Check out: 31.12.2019</p>
            </div>
            <div className="item_column">
                <p className="overview_check">Rooms: 02</p>
                <p className="overview_check">Guests: 03</p>
                <div className="price_holder">
                    <p>Price</p>
                    <p>$157</p>
                </div>
            </div>
            <div className="item_column">
                <div className="price_holder">
                    <p>Price</p>
                    <p>$157</p>
                </div>
                
            </div>
        </div>
    )
}

export default OverviewItem
