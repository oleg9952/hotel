import React from 'react'
import './BookingCart.css'

const BookingCart = () => {
    return (
        <div className="booking_cart">
            <div className="cart_close">
                <div></div>
                <div></div>
            </div>
            <div className="cart_open hide">
                <i className="fas fa-shopping-cart"></i>
            </div>
            <h2 className="cart_title">Your booking overview</h2>
            <div className="cart_overview">
                <div className="overview_item">
                    <div className="item_column">k</div>
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
                <div className="overview_item">
                    <div className="item_column">k</div>
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
                <div className="overview_item final">
                    <div className="final_holder">
                        <p>Totla Price</p>
                        <p>$333</p>
                    </div>
                </div>
            </div>
            <div className="cart_confirmation">
                
            </div>
        </div>
    )
}

export default BookingCart
