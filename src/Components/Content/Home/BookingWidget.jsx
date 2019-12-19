import React from 'react'

const BookingWidget = () => {
    return (
        <form className="booking_widget">
            <div className="widget_bg"></div>
            <div className="widget_inputs">
                <select name="room_class" className="input_item">
                    <option selected disabled>Choose class</option>
                    <option value="VIP">VIP</option>
                    <option value="Bussines">Bussines</option>
                    <option value="Standard">Standard</option>
                    <option value="Economy">Economy</option>
                </select>
                <select name="guests_number" className="input_item">
                    <option selected disabled>No. of guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select name="guests_number" className="input_item">
                    <option selected disabled>Check in</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select name="guests_number" className="input_item">
                    <option selected disabled>Check out</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <button type="submit">
                <i className="fab fa-telegram-plane"></i>
            </button>
        </form>
    )
}

export default BookingWidget
