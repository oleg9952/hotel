import React from 'react'

const ReviewComment = (props) => {
    const { date, name, message, registered, profileImg } = props.review

    const formatDate = date => {
        let d = new Date(date)
        let day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
        let month = (d.getMonth() + 1) < 10 ? `0${(d.getMonth() + 1)}` : (d.getMonth() + 1)
        let year = d.getFullYear()
        return `${day}.${month}.${year}`
    }

    return (
        <div className="feedback_card">
            <div className="card">
                <div className="card_img"
                    style={{ backgroundImage: `url(${profileImg})` }}
                >
                    { registered ? profileImg ? '' : name.charAt(0).toUpperCase() : name.charAt(0).toUpperCase() }
                </div>
                <p className="feedback_message">
                    { message }
                </p>
                <div className="customer_details">
                    <p className="customer_name">{ name }</p>
                    <p className="feedback_date">{ formatDate(date) }</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewComment
