import React from 'react'

const ResultItem = () => {
    return (
        <div className="result_item">
            <div className="result_item-img" />
            <div className="result_item-body">
                <div className="body_main">
                    <p className="result_name">name...</p>
                    <div className="card_rating">
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
                    <p className="result_details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa ipsam ad dicta doloribus perferendis totam commodi, quas eos placeat saepe atque aliquam, architecto nostrum cupiditate error vero. Dolorem atque fugit expedita. . . <span className="more">more</span></p>
                </div>
                <div className="body_price">
                    <p>$47</p>
                </div>
            </div>
        </div>
    )
}

export default ResultItem
